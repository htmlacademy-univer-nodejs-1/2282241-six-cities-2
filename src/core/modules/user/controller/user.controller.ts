import {inject, injectable} from 'inversify';
import { Response, Request} from 'express';
import {BaseController} from '../../../controller/base-controller.js';
import {AppComponent} from '../../../../types/app-component.enum.js';
import {LoggerInterface} from '../../../logger/logger.interface';
import {HttpMethod} from '../../../../types/http-method.enum.js';
import CreateUserDto from '../dto/create-user.dto';
import {RestSchema} from '../../../config/rest.schema';
import {Config} from 'convict';
import UserService from '../user.service.js';
import {HttpError} from '../../../errors/http-error.js';
import {StatusCodes} from 'http-status-codes';
import {UserRdo} from '../rdo/user.rdo.js';
import {createJWT, fillDTO} from '../../../helpers/common.js';
import {UploadFileMiddleware} from '../../../middleware/upload-file.middleware.js';
import {ValidateObjectIdMiddleware} from '../../../middleware/validate-objectId.middleware.js';
import {LoginUserDto} from '../dto/login-user.dto.js';
import LoggedUserRdo from '../rdo/logged-user.rdo.js';
import {JWT_ALGORITHM} from '../user.constant.js';

@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(AppComponent.LoggerInterface) protected readonly logger: LoggerInterface,
    @inject(AppComponent.UserServiceInterface) private readonly userService: UserService,
    @inject(AppComponent.ConfigInterface) private readonly configService: Config<RestSchema>,
  ) {
    super(logger);
    this.logger.info('Register routes for UserController…');

    this.addRoute({path: '/register', method: HttpMethod.Post, handler: this.create});
    this.addRoute({path: '/login', method: HttpMethod.Post, handler: this.login});
    this.addRoute({
      path: '/:userId/avatar',
      method: HttpMethod.Post,
      handler: this.uploadAvatar,
      middlewares: [
        new ValidateObjectIdMiddleware('userId'),
        new UploadFileMiddleware(this.configService.get('UPLOAD_DIRECTORY'), 'avatar'),
      ]
    });
    this.addRoute({
      path: '/login',
      method: HttpMethod.Get,
      handler: this.checkAuthenticate,
    });
  }

  public async create(
    {body}: Request<Record<string, unknown>, Record<string, unknown>, CreateUserDto>,
    res: Response,
  ): Promise<void> {
    const existsUser = await this.userService.findByEmail(body.email);

    if (existsUser) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `User with email «${body.email}» exists.`,
        'UserController'
      );
    }

    const result = await this.userService.create(body, this.configService.get('SALT'));
    this.created(res, fillDTO(UserRdo, result));
  }

  public async login(
    { body }:Request<Record<string, unknown>, Record<string, unknown>, LoginUserDto>,
    _res: Response,
  ): Promise<void> {
    const user = await this
      .userService
      .verifyUser(body, this.configService.get('SALT'));

    if (!user) {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        'Unauthorized',
        'UserController',
      );
    }

    const token = await createJWT(
      JWT_ALGORITHM,
      this.configService.get('JWT_SECRET'),
      {
        email: user.email,
        id: user.id
      }
    );

    this.ok(_res, fillDTO(LoggedUserRdo, {
      email: user.email,
      token
    }));
  }

  public async uploadAvatar(req: Request, res: Response) {
    this.created(res, {
      filepath: req.file?.path
    });
  }

  public async checkAuthenticate({ user: { email }}: Request, res: Response) {
    const foundedUser = await this.userService.findByEmail(email);

    if (! foundedUser) {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        'Unauthorized',
        'UserController'
      );
    }

    this.ok(res, fillDTO(LoggedUserRdo, foundedUser));
  }
}

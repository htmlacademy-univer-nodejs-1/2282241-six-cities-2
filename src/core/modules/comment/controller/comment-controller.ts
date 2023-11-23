import {inject, injectable} from 'inversify';
import { Response, Request } from 'express';
import {BaseController} from '../../../controller/base-controller.ts';
import {AppComponent} from '../../../../types/app-component.enum';
import {LoggerInterface} from '../../../logger/logger.interface';
import {CommentService} from '../comment.service';
import OfferService from '../../offer/offer.service';
import {HttpMethod} from '../../../../types/http-method.enum';
import {StatusCodes} from 'http-status-codes';
import {HttpError} from '../../../errors/http-error.ts';
import {fillDTO} from '../../../helpers/common.ts';
import {CommentRdo} from '../rdo/comment-rdo.ts';
import CreateCommentDto from '../dto/create-comment.dto';

@injectable()
export default class CommentController extends BaseController {
  constructor(
    @inject(AppComponent.LoggerInterface) protected readonly logger: LoggerInterface,
    @inject(AppComponent.CommentServiceInterface) private readonly commentService: CommentService,
    @inject(AppComponent.OfferServiceInterface) private readonly offerService: OfferService,
  ) {
    super(logger);

    this.logger.info('Register routes for CommentController…');
    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
  }

  public async create(
    {body}: Request<Record<string, unknown>, Record<string, unknown>, CreateCommentDto>,
    res: Response
  ): Promise<void> {


    if (!await this.offerService.exists(body.offerId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${body.offerId} not found.`,
        'CommentController'
      );
    }

    const comment = await this.commentService.create(body);
    await this.offerService.incCommentCount(body.offerId);
    this.created(res, fillDTO(CommentRdo, comment));
  }
}

import {AppComponent} from "../../../../types/app-component.enum";
import {LoggerInterface} from "../../../logger/logger.interface";
import {inject, injectable} from "inversify";
import {BaseController} from "../../../controller/base-controller";
import {HttpMethod} from "../../../../types/http-method.enum";
import {HttpError} from "../../../errors/http-error";
import {StatusCodes} from "http-status-codes";
import { Request, Response } from 'express';

@injectable()
export default class OfferController extends BaseController {
    constructor(
        @inject(AppComponent.LoggerInterface) logger: LoggerInterface,
    ) {
        super(logger);

        this.logger.info('Register routes for OfferController');
        this.addRoute({ path: '/:offerId', method: HttpMethod.Get, handler: this.show });
    }

    public async show(_req: Request, _res: Response): Promise<void> {
        throw new HttpError(
            StatusCodes.NOT_IMPLEMENTED,
            'Not implemented',
            'OfferController'
        );
    }
}

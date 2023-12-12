import {NextFunction, Request, Response} from 'express';
import {Middleware} from './middleware.interface.js';
import {HttpError} from '../errors/http-error.js';
import {StatusCodes} from 'http-status-codes';
import {DocumentExists} from '../../types/document-exists.interface.js';

export class DocumentExistsMiddleware implements Middleware {
  constructor(
        private readonly service: DocumentExists,
        private readonly entityName: string,
        private readonly paramName: string,
  ) {
  }

  public async execute({params}: Request, _res: Response, next: NextFunction): Promise<void> {
    const documentId = params[this.paramName];
    if (!await this.service.exists(documentId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `${this.entityName} with ${documentId} not found.`,
        'DocumentExistsMiddleware'
      );
    }

    next();
  }
}

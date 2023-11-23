import { NextFunction, Request, Response } from 'express';
import { HttpMethod } from './http-method.enum.js';
import {Middleware} from '../core/middleware/middleware.interface';

export interface RouteInterface {
  path: string;
  method: HttpMethod;
  handler: (req: Request, res: Response, next: NextFunction) => void;
  middlewares?: Middleware[];
}

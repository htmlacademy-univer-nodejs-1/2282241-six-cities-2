import Application from './rest.js';
import {AppComponent} from '../types/app-component.enum.js';
import {LoggerInterface} from '../core/logger/logger.interface.js';
import PinoService from '../core/logger/pino.service.js';
import {ConfigInterface} from '../core/config/config.interface.js';
import {RestSchema} from '../core/config/rest.schema.js';
import ConfigService from '../core/config/config.service.js';
import {DatabaseClientInterface} from '../core/database-client/database-client.interface.js';
import MongoClientService from '../core/database-client/mongo-client.service.js';
import {Container} from 'inversify';
import {ExceptionFilterInterface} from '../core/exception-filters/exception-filter.interface.js';
import HttpErrorExceptionFilter from '../core/exception-filters/http-error.exception-filter.js';
import ValidationExceptionFilter from '../core/exception-filters/validation.exception-filter.js';
import BaseExceptionFilter from '../core/exception-filters/base.exception-filter.js';


export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();
  restApplicationContainer.bind<Application>(AppComponent.Application).to(Application).inSingletonScope();
  restApplicationContainer.bind<LoggerInterface>(AppComponent.LoggerInterface).to(PinoService).inSingletonScope();
  restApplicationContainer.bind<ConfigInterface<RestSchema>>(AppComponent.ConfigInterface).to(ConfigService).inSingletonScope();
  restApplicationContainer.bind<DatabaseClientInterface>(AppComponent.DatabaseClientInterface).to(MongoClientService).inSingletonScope();
  restApplicationContainer.bind<ExceptionFilterInterface>(AppComponent.HttpErrorExceptionFilter).to(HttpErrorExceptionFilter).inSingletonScope();
  restApplicationContainer.bind<ExceptionFilterInterface>(AppComponent.ValidationExceptionFilter).to(ValidationExceptionFilter).inSingletonScope();
  restApplicationContainer.bind<ExceptionFilterInterface>(AppComponent.BaseExceptionFilter).to(BaseExceptionFilter).inSingletonScope();

  return restApplicationContainer;
}

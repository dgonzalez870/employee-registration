import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  ErrorHandler,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ErrorHandlerService } from './lib/error-handler/error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), {
    provide: ErrorHandler,
    useExisting: ErrorHandlerService,
  }],
};

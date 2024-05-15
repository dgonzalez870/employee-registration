import { HttpErrorResponse } from '@angular/common/http';
import {
  ErrorHandler,
  Injectable,
} from '@angular/core';

import { StatusInfoService } from '../status-info/status-info.service';

/**
 * This class handles errors in a centralized place of the application
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private statusInfoService: StatusInfoService) {}

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.statusInfoService.setError(
        error.error.message ||
          'Tenemos un problema,por favor intenete nuevamente más tarde'
      );
    } else {
      // TODO: Ask the user for authorization to log client errors to the server
      // and provide an endpoint to log to
      // For now, we just log the error to the console
      console.error(error);
    }
  }
}

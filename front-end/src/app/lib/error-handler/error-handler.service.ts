import {
  ErrorHandler,
  Injectable,
} from '@angular/core';

import { StatusInfoService } from '../status-info/status-info.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private statusInfoService: StatusInfoService) {}

  handleError(error: any): void {
    // TODO: Add error logging and handle error by code
    // This implementation is just for demo purposes
    // and shows a generic error
    this.statusInfoService.setError(
      'Tenemos un problema,por favor intenete nuevamente más tarde'
    );
  }
}

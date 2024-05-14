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
    this.statusInfoService.setError(error.message);
  }
}

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export interface StatusInfo {
  status: 'ERROR' | 'SUCCESS';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class StatusInfoService {
  private statusinfo$ = new BehaviorSubject<StatusInfo | null>(null);
  constructor() {}

  getStatusInfo$() {
    return this.statusinfo$.asObservable();
  }

  setStatusInfo(statusInfo: StatusInfo) {
    this.statusinfo$.next(statusInfo);
  }

  setError(message: string) {
    this.setStatusInfo({ status: 'ERROR', message });
  }

  setSuccess(message: string) {
    this.setStatusInfo({ status: 'SUCCESS', message });
  }
}

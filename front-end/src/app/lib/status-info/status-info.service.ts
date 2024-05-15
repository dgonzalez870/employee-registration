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

  private loading$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  getStatusInfo$() {
    return this.statusinfo$.asObservable();
  }

  setStatusInfo(statusInfo: StatusInfo) {
    this.statusinfo$.next(statusInfo);
    this.setTimer();
  }

  setError(message: string) {
    this.setStatusInfo({ status: 'ERROR', message });
  }

  setSuccess(message: string) {
    this.setStatusInfo({ status: 'SUCCESS', message });
  }

  setLoading(loading: boolean) {
    this.loading$.next(loading);
  }

  getLoading$() {
    return this.loading$.asObservable();
  }

  private setTimer() {
    setTimeout(() => {
      this.statusinfo$.next(null);
    }, 5000);
  }
}

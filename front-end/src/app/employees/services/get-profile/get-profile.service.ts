import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { GetEmployeeResponse } from '../models/get-employee-response';

@Injectable({
  providedIn: 'root',
})
export class GetProfileService {
  constructor(private httpClient: HttpClient) {}

  exec(id: number): Observable<GetEmployeeResponse> {
    return this.httpClient.get<GetEmployeeResponse>(
      `${environment.api.url}/employees/${id}`
    );
  }
}

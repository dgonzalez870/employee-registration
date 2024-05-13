import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CreateEmployee } from '../models/create-employee';
import { GetEmployeeResponse } from '../models/get-employee-response';

@Injectable({
  providedIn: 'root',
})
export class UpdateEmployeeService {
  constructor(private httpClient: HttpClient) {}

  exec(id: number, data: CreateEmployee): Observable<GetEmployeeResponse> {
    return this.httpClient.patch<GetEmployeeResponse>(
      `${environment.api.url}/employees/${id}`,
      data
    );
  }
}

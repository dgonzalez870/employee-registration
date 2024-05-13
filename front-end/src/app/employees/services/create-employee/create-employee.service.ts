import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CreateEmployee } from '../models/create-employee';
import { GetEmployeeResponse } from '../models/get-employee-response';

@Injectable({
  providedIn: 'root',
})
export class CreateEmployeeService {
  constructor(private httpClient: HttpClient) {}

  exec(data: CreateEmployee): Observable<GetEmployeeResponse> {
    return this.httpClient.post<GetEmployeeResponse>(
      `${environment.api.url}/employees/`,
      data
    );
  }
}

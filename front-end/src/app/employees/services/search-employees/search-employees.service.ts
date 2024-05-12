import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { environment } from '../../../../environments/environment';
import { EmployeeInfo } from '../../employees-list/models/employee-info';
import { FakeEmployees } from './fake-data';
import { EmployeeSearchParams } from './models';

@Injectable({
  providedIn: 'root',
})
export class SearchEmployeesService {
  constructor(private httpClient: HttpClient) {}

  public exec(query: EmployeeSearchParams): Observable<EmployeeInfo[]> {
    return this.httpClient.get<EmployeeInfo[]>(
      `${environment.api.url}/employees`,
      {
        params: query as HttpParams,
      }
    );
  }

  public execOffline(query: EmployeeSearchParams): Observable<EmployeeInfo[]> {
    const { page = 1, pageSize = 10 } = query;
    const offset = (page - 1) * pageSize;
    const limit = offset + pageSize;
    return of(FakeEmployees.slice(offset, limit));
  }
}

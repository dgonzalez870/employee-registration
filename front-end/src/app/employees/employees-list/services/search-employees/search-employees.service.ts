import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { EmployeeInfo } from '../../models/employee-info';
import { FakeEmployees } from './fake-data';
import { EmployeeSearchParams } from './models';

@Injectable({
  providedIn: 'root',
})
export class SearchEmployeesService {
  constructor() {}

  public exec(query: EmployeeSearchParams): Observable<EmployeeInfo[]> {
    const { page = 1, pageSize = 10 } = query;
    const offset = (page - 1) * pageSize;
    const limit = offset + pageSize;
    return of(FakeEmployees.slice(offset, limit));
  }
}

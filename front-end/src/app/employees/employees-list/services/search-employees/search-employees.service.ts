import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { EmployeeInfo } from '../../models/employee-info';
import { FakeEmployees } from './fake-data';

@Injectable({
  providedIn: 'root',
})
export class SearchEmployeesService {
  constructor() {}

  public exec(): Observable<EmployeeInfo[]> {
    return of(FakeEmployees.slice(0, 3));
  }
}

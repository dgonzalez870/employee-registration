import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { EmployeeInfo } from './models/employee-info';
import {
  SearchEmployeesService,
} from './services/search-employees/search-employees.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesListService {
  private employees$: BehaviorSubject<EmployeeInfo[]> = new BehaviorSubject<
    EmployeeInfo[]
  >([]);

  constructor(private searchEmployeesService: SearchEmployeesService) {}

  public getEmployees$(): Observable<EmployeeInfo[]> {
    return this.employees$.asObservable();
  }

  public searchEmployees(): void {
    this.searchEmployeesService.exec().subscribe((employees) => {
      this.employees$.next(employees);
    });
  }
}

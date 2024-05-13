import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { environment } from '../../../../environments/environment';
import {
  EmployeeInfo,
  EmployeePagination,
} from '../../employees-list/models/employee-info';
import { EmployeeSearchParams } from './models';
import {
  EmployeeItem,
  SearchEmployeesResponse,
} from './models/search-employees-response';

@Injectable({
  providedIn: 'root',
})
export class SearchEmployeesService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Maps the data from the API to the EmployeeInfo model to be
   * displayed in the list.
   */
  employeeItem2EmployeeInfo(data: EmployeeItem): EmployeeInfo {
    const {
      first_surname = '',
      second_surname = '',
      first_name = '',
      other_names = '',
      email,
    } = data;

    return {
      id: data.id,
      name: `${first_surname} ${second_surname} ${first_name} ${other_names}`.trim(),
      email,
      country: data.country,
      jobArea: data.job_area,
      document: data.id_document,
      idCode: data.id_code,
    };
  }

  public exec(query: EmployeeSearchParams): Observable<EmployeePagination> {
    return this.httpClient
      .get<SearchEmployeesResponse>(`${environment.api.url}/employees`, {
        params: query as HttpParams,
      })
      .pipe(
        map((data) => ({
          currentPage: data.page,
          totalPages: data.totalPages,
          employees: data.employees.map(this.employeeItem2EmployeeInfo),
        }))
      );
  }
}

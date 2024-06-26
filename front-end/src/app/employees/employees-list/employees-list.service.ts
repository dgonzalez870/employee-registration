import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { SelectOptions } from '../../lib/select-multiple';
import {
  LoadCountriesService,
} from '../services/load-countries/load-countries.service';
import {
  LoadDocumentsService,
} from '../services/load-documents/load-documents.service';
import {
  LoadJobAreasService,
} from '../services/load-job-areas/load-job-areas.service';
import { RemoveService } from '../services/remove/remove.service';
import { EmployeeSearchParams } from '../services/search-employees/models';
import {
  SearchEmployeesService,
} from '../services/search-employees/search-employees.service';
import { EmployeeInfo } from './models/employee-info';

@Injectable({
  providedIn: 'root',
})
export class EmployeesListService {
  private employees$: BehaviorSubject<EmployeeInfo[]> = new BehaviorSubject<
    EmployeeInfo[]
  >([]);

  private countries$: BehaviorSubject<SelectOptions[]> = new BehaviorSubject<
    SelectOptions[]
  >([]);

  private documents$: BehaviorSubject<SelectOptions[]> = new BehaviorSubject<
    SelectOptions[]
  >([]);

  private jobAreas$: BehaviorSubject<SelectOptions[]> = new BehaviorSubject<
    SelectOptions[]
  >([]);

  private totalPages$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private searchEmployeesService: SearchEmployeesService,
    private loadCountriesService: LoadCountriesService,
    private loadDocumentsService: LoadDocumentsService,
    private loadJobAreasService: LoadJobAreasService,
    private deleteService: RemoveService
  ) {}

  public getEmployees$(): Observable<EmployeeInfo[]> {
    return this.employees$.asObservable();
  }

  public getCountries$(): Observable<SelectOptions[]> {
    return this.countries$.asObservable();
  }

  public getDocuments$(): Observable<SelectOptions[]> {
    return this.documents$.asObservable();
  }

  public getJobAreas$(): Observable<SelectOptions[]> {
    return this.jobAreas$.asObservable();
  }

  public getTotalPages$(): Observable<number> {
    return this.totalPages$.asObservable();
  }

  public searchEmployees(query: EmployeeSearchParams): void {
    this.searchEmployeesService.exec(query).subscribe((data) => {
      this.employees$.next(data.employees);
      this.totalPages$.next(data.totalPages);
    });
  }

  public loadCountries(): void {
    this.loadCountriesService.exec().subscribe((countries) => {
      this.countries$.next(countries);
    });
  }

  public loadDocuments(): void {
    this.loadDocumentsService.exec().subscribe((documents) => {
      this.documents$.next(documents);
    });
  }

  public loadJobAreas(): void {
    this.loadJobAreasService.exec().subscribe((jobAreas) => {
      this.jobAreas$.next(jobAreas);
    });
  }

  public delete(id: number): void {
    this.deleteService.exec(id).subscribe(() => {
      this.employees$.next(
        this.employees$.getValue().filter((employee) => employee.id !== id)
      );
    });
  }
}

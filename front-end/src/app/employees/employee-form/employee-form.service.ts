import { Injectable } from '@angular/core';

import { BehaviorSubject, finalize, forkJoin, Observable } from 'rxjs';

import { SelectOptions } from '../../lib/select-multiple';
import { StatusInfoService } from '../../lib/status-info/status-info.service';
import { CreateEmployeeService } from '../services/create-employee/create-employee.service';
import { GetProfileService } from '../services/get-profile/get-profile.service';
import { LoadCountriesService } from '../services/load-countries/load-countries.service';
import { LoadDocumentsService } from '../services/load-documents/load-documents.service';
import { LoadJobAreasService } from '../services/load-job-areas/load-job-areas.service';
import { CreateEmployee } from '../services/models/create-employee';
import { GetEmployeeResponse } from '../services/models/get-employee-response';
import { UpdateEmployeeService } from '../services/update-employee/update-employee.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFormService {
  private loading$ = new BehaviorSubject<boolean>(false);
  private employee$ = new BehaviorSubject<GetEmployeeResponse | null>(null);
  private countries$ = new BehaviorSubject<SelectOptions[]>([]);
  private documents$ = new BehaviorSubject<SelectOptions[]>([]);
  private jobAreas$ = new BehaviorSubject<SelectOptions[]>([]);

  public isLoading$ = this.loading$.asObservable();

  constructor(
    private getEmployeeService: GetProfileService,
    private updateEmployeeService: UpdateEmployeeService,
    private createEmployeeService: CreateEmployeeService,
    private loadCountriesService: LoadCountriesService,
    private loadDocumentsService: LoadDocumentsService,
    private loadJobAreasService: LoadJobAreasService,
    private statusInfoService: StatusInfoService
  ) {}

  public loadEmployee(id: number): void {
    this.loading$.next(true);

    this.getEmployeeService
      .exec(id)
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe((employee) => {
        this.employee$.next(employee);
      });
  }

  public updateEmployee(id: number, data: CreateEmployee): void {
    this.loading$.next(true);

    this.updateEmployeeService
      .exec(id, data)
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe(() =>
        this.statusInfoService.setSuccess('Registro actualizado con éxito')
      );
  }

  public createEmployee(data: CreateEmployee): void {
    this.loading$.next(true);

    this.createEmployeeService
      .exec(data)
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe((response) => {
        this.employee$.next(response);
        this.statusInfoService.setSuccess('Registro creado con éxito');
      });
  }

  public getEmployee$(): Observable<GetEmployeeResponse | null> {
    return this.employee$.asObservable();
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

  public loadSelectOptions(): void {
    this.loading$.next(true);
    forkJoin([
      this.loadCountriesService.exec(),
      this.loadDocumentsService.exec(),
      this.loadJobAreasService.exec(),
    ])
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe((values) => {
        this.countries$.next(values[0]);
        this.documents$.next(values[1]);
        this.jobAreas$.next(values[2]);
      });
  }

  clearEmployee(): void {
    this.employee$.next(null);
  }
}

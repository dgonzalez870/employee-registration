import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  debounceTime,
  distinctUntilChanged,
  Subscription,
} from 'rxjs';

import { FormcontrolUiDirective } from '../../lib/formcontrol-ui';
import { PaginatorComponent } from '../../lib/paginator';
import { SelectMultipleComponent } from '../../lib/select-multiple';
import {
  EmployeesInfoCardComponent,
} from './employees-info-card/employees-info-card.component';
import { EmployeesListService } from './employees-list.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [
    EmployeesInfoCardComponent,
    CommonModule,
    ReactiveFormsModule,
    FormcontrolUiDirective,
    SelectMultipleComponent,
    PaginatorComponent,
  ],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = 'flex flex-col h-full';

  public employees$ = this.employeesListService.getEmployees$();
  public countries$ = this.employeesListService.getCountries$();
  public documents$ = this.employeesListService.getDocuments$();
  public jobAreas$ = this.employeesListService.getJobAreas$();

  public searchForm: FormGroup = this.formBuilder.group({
    term: [''],
    countries: [''],
    documents: [''],
    jobAreas: [''],
  });

  private sub$ = new Subscription();

  constructor(
    private employeesListService: EmployeesListService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeesListService.loadCountries();
    this.employeesListService.loadDocuments();
    this.employeesListService.loadJobAreas();
    this.employeesListService.searchEmployees();

    this.sub$.add(
      this.activatedRoute.queryParams.subscribe((params) => {
        this.searchForm.patchValue(params, { emitEvent: false });
      })
    );

    this.sub$.add(
      this.searchForm.valueChanges
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe((value) => {
          this.router.navigate([], {
            queryParams: {
              ...value,
            },
          });
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  onPageChange(event: number): void {}
}

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
  RouterLink,
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
  DeleteConfirmComponent,
} from './delete-confirm/delete-confirm.component';
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
    RouterLink,
    DeleteConfirmComponent,
  ],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = 'flex flex-col h-full container mx-auto';

  public employees$ = this.employeesListService.getEmployees$();
  public countries$ = this.employeesListService.getCountries$();
  public documents$ = this.employeesListService.getDocuments$();
  public jobAreas$ = this.employeesListService.getJobAreas$();
  public totalPages$ = this.employeesListService.getTotalPages$();

  public page = 1;
  public showModal = false;

  public searchForm: FormGroup = this.formBuilder.group({
    term: [''],
    countries: [''],
    documents: [''],
    jobAreas: [''],
  });

  private selectedId!: number;
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

    this.sub$.add(
      this.activatedRoute.queryParams.subscribe((params) => {
        this.employeesListService.searchEmployees({
          ...params,
        });
        this.page = params['page'] ? +params['page'] : 1;
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
              page: 1,
            },
          });
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  onPageChange(event: number): void {
    this.page = event;
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: {
        page: this.page,
      },
    });
  }

  onCardAction(action: string, id: number): void {
    if (action === 'delete') {
      this.selectedId = id;
      this.showModal = true;
    }

    if (action === 'edit') {
      this.router.navigate([`/employees/form/${id}`], {
        queryParamsHandling: 'merge',
      });
    }
  }

  removeUser(): void {
    this.showModal = false;
    this.employeesListService.delete(this.selectedId);
  }
}

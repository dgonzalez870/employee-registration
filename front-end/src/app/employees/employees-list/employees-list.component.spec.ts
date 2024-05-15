import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  RouterModule,
} from '@angular/router';

import { of } from 'rxjs';

import { EmployeesListComponent } from './employees-list.component';
import { EmployeesListService } from './employees-list.service';

describe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: EmployeesListService,
          useValue: {
            getEmployees$: () => of([]),
            getCountries$: () => of([]),
            getDocuments$: () => of([]),
            getJobAreas$: () => of([]),
            getTotalPages$: () => of(1),
            loadCountries: () => {},
            loadDocuments: () => {},
            loadEmployees: () => {},
            loadJobAreas: () => {},
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
          },
        },
      ],
      imports: [EmployeesListComponent, RouterModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { of } from 'rxjs';

import { EmployeeFormComponent } from './employee-form.component';
import { EmployeeFormService } from './employee-form.service';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFormComponent, RouterModule.forRoot([])],
      providers: [
        {
          provide: EmployeeFormService,
          useValue: {
            getCountries$: () => of([]),
            getDocuments$: () => of([]),
            getJobAreas$: () => of([]),
            getEmployee$: () => of({}),
            loadSelectOptions: () => {},
            clearEmployee: () => {},
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StatusInfoService } from '../../lib/status-info/status-info.service';
import {
  CreateEmployeeService,
} from '../services/create-employee/create-employee.service';
import { GetProfileService } from '../services/get-profile/get-profile.service';
import {
  LoadCountriesService,
} from '../services/load-countries/load-countries.service';
import {
  LoadDocumentsService,
} from '../services/load-documents/load-documents.service';
import {
  LoadJobAreasService,
} from '../services/load-job-areas/load-job-areas.service';
import {
  UpdateEmployeeService,
} from '../services/update-employee/update-employee.service';
import { EmployeeFormService } from './employee-form.service';

describe('EmployeeFormService', () => {
  let service: EmployeeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: GetProfileService,
          useValue: {},
        },
        {
          provide: UpdateEmployeeService,
          useValue: {},
        },
        {
          provide: CreateEmployeeService,
          useValue: {},
        },
        {
          provide: LoadCountriesService,
          useValue: {},
        },
        {
          provide: LoadDocumentsService,
          useValue: {},
        },
        {
          provide: LoadJobAreasService,
          useValue: {},
        },
        {
          provide: StatusInfoService,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(EmployeeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

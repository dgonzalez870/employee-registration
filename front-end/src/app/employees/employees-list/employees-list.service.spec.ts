import { TestBed } from '@angular/core/testing';

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
import {
  SearchEmployeesService,
} from '../services/search-employees/search-employees.service';
import { EmployeesListService } from './employees-list.service';

describe('EmployeesListService', () => {
  let service: EmployeesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SearchEmployeesService,
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
          provide: RemoveService,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(EmployeesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SearchEmployeesService } from './search-employees.service';

describe('SearchEmployeesService', () => {
  let service: SearchEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

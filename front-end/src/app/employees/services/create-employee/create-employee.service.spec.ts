import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CreateEmployeeService } from './create-employee.service';

describe('CreateEmployeeService', () => {
  let service: CreateEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CreateEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

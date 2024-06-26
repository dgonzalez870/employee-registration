import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UpdateEmployeeService } from './update-employee.service';

describe('UpdateEmployeeService', () => {
  let service: UpdateEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UpdateEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

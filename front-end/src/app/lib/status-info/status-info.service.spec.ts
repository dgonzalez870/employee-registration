import { TestBed } from '@angular/core/testing';

import { StatusInfoService } from './status-info.service';

describe('StatusInfoService', () => {
  let service: StatusInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetProfileService } from './get-profile.service';

describe('GetProfileService', () => {
  let service: GetProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GetProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoadJobAreasService } from './load-job-areas.service';

describe('LoadJobAreasService', () => {
  let service: LoadJobAreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LoadJobAreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

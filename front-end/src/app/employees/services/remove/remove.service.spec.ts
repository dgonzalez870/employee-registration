import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RemoveService } from './remove.service';

describe('RemoveService', () => {
  let service: RemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

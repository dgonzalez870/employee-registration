import { TestBed } from '@angular/core/testing';

import { LoadDocumentsService } from './load-documents.service';

describe('LoadDocumentsService', () => {
  let service: LoadDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

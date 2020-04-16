import { TestBed } from '@angular/core/testing';

import { ExtractErrorsService } from './extract-errors.service';

describe('ExtractErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtractErrorsService = TestBed.get(ExtractErrorsService);
    expect(service).toBeTruthy();
  });
});

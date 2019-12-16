import { TestBed } from '@angular/core/testing';

import { EbbinghausService } from './ebbinghaus.service';

describe('EbbinghausService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EbbinghausService = TestBed.get(EbbinghausService);
    expect(service).toBeTruthy();
  });
});

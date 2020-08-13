import { TestBed } from '@angular/core/testing';

import { SuspendChargesService } from './suspend-charges.service';

describe('SuspendChargesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuspendChargesService = TestBed.get(SuspendChargesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PlanContableService } from './plan-contable.service';

describe('PlanContableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanContableService = TestBed.get(PlanContableService);
    expect(service).toBeTruthy();
  });
});

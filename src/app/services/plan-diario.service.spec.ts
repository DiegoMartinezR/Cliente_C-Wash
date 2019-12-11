import { TestBed } from '@angular/core/testing';

import { PlanDiarioService } from './plan-diario.service';

describe('PlanDiarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanDiarioService = TestBed.get(PlanDiarioService);
    expect(service).toBeTruthy();
  });
});

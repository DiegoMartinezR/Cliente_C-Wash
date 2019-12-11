import { TestBed } from '@angular/core/testing';

import { PlanMensualService } from './plan-mensual.service';

describe('PlanMensualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanMensualService = TestBed.get(PlanMensualService);
    expect(service).toBeTruthy();
  });
});

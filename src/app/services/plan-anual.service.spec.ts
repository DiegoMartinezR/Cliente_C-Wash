import { TestBed } from '@angular/core/testing';

import { PlanAnualService } from './plan-anual.service';

describe('PlanAnualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanAnualService = TestBed.get(PlanAnualService);
    expect(service).toBeTruthy();
  });
});

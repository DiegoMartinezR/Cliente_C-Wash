import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanContableFromComponent } from './plan-contable-from.component';

describe('PlanContableFromComponent', () => {
  let component: PlanContableFromComponent;
  let fixture: ComponentFixture<PlanContableFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanContableFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanContableFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

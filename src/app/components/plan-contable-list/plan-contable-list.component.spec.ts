import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanContableListComponent } from './plan-contable-list.component';

describe('PlanContableListComponent', () => {
  let component: PlanContableListComponent;
  let fixture: ComponentFixture<PlanContableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanContableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanContableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

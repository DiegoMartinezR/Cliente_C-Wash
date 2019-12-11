import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMensualComponent } from './plan-mensual.component';

describe('PlanMensualComponent', () => {
  let component: PlanMensualComponent;
  let fixture: ComponentFixture<PlanMensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanMensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOffComponent } from './login-off.component';

describe('LoginOffComponent', () => {
  let component: LoginOffComponent;
  let fixture: ComponentFixture<LoginOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [FormBuilder]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SignupComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    });
  }));

  it('should create', () => {
     expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });
  it('Add good format user', fakeAsync(() => {
      component.signupForm.controls['email'].setValue("test@test.com");
      component.signupForm.controls['password'].setValue("123456");
      expect(component.signupForm.valid).toBeTruthy();
    }));
  it('Add bad format user', fakeAsync(() => {
      component.signupForm.controls['email'].setValue("test");
      component.signupForm.controls['password'].setValue("123456");
      expect(component.signupForm.valid).toBeFalsy();
    }));
});

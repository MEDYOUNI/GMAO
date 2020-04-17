import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.signInForm.valid).toBeFalsy();
  });
  // it('Exist user', fakeAsync(() => {
  //     component.signInForm.controls['email'].setValue("test@test.com");
  //     component.signInForm.controls['password'].setValue("123456");
  //     expect(component.onSubmit()).toBeTruthy();
  //   }));
  it('Add bad format user', fakeAsync(() => {
      component.signInForm.controls['email'].setValue("test");
      component.signInForm.controls['password'].setValue("123456");
      expect(component.onSubmit()).toBeFalsy();
    }));

});

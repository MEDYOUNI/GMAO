import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisNewComponent } from './avis-new.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';

describe('AvisNewComponent', () => {
  let component: AvisNewComponent;
  let fixture: ComponentFixture<AvisNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisNewComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

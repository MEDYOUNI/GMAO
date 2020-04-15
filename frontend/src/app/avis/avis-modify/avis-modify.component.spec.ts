import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisModifyComponent } from './avis-modify.component';

describe('AvisModifyComponent', () => {
  let component: AvisModifyComponent;
  let fixture: ComponentFixture<AvisModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

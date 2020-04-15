import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurModifyComponent } from './secteur-modify.component';

describe('SecteurModifyComponent', () => {
  let component: SecteurModifyComponent;
  let fixture: ComponentFixture<SecteurModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecteurModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecteurModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

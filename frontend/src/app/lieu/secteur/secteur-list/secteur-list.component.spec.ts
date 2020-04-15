import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurListComponent } from './secteur-list.component';

describe('SecteurListComponent', () => {
  let component: SecteurListComponent;
  let fixture: ComponentFixture<SecteurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecteurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

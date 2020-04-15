import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteModifyComponent } from './site-modify.component';

describe('SiteModifyComponent', () => {
  let component: SiteModifyComponent;
  let fixture: ComponentFixture<SiteModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

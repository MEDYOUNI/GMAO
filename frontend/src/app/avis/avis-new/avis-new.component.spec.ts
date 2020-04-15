import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisNewComponent } from './avis-new.component';

describe('AvisNewComponent', () => {
  let component: AvisNewComponent;
  let fixture: ComponentFixture<AvisNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisNewComponent ]
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

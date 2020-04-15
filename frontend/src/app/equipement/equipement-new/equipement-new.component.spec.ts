import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementNewComponent } from './equipement-new.component';

describe('EquipementNewComponent', () => {
  let component: EquipementNewComponent;
  let fixture: ComponentFixture<EquipementNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipementNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

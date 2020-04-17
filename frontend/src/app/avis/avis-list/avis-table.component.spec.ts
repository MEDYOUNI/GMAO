import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisTableComponent } from './avis-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AvisTableComponent', () => {
  let component: AvisTableComponent;
  let fixture: ComponentFixture<AvisTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisTableComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });
});

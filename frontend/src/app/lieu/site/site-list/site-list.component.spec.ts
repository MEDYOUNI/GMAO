import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListComponent } from './site-list.component';
import { LieuService } from 'src/app/services/lieu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SiteListComponent', () => {
  let component: SiteListComponent;
  let fixture: ComponentFixture<SiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteListComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule, BrowserModule, FormsModule],
      providers: [LieuService]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SiteListComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // test if the componenet is correctly initialised
  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});

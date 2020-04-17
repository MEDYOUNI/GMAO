import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SiteNewComponent } from './site-new.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LieuService } from 'src/app/services/lieu.service';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SiteNewComponent', () => {
  let component: SiteNewComponent;
  let fixture: ComponentFixture<SiteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNewComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule/*, BrowserModule, FormsModule*/],
      providers: [LieuService, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNewComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.siteForm.valid).toBeFalsy();
  });
  it('site should update from changes', fakeAsync(() => {
      const testSite = {
        nom: 'test@test.com',
        description: '12345'
      };
      component.siteForm.controls['nom'].setValue(testSite.nom);
      component.siteForm.controls['description'].setValue(testSite.description);
      expect(component.siteForm.valid).toBeTruthy();
    }));
});

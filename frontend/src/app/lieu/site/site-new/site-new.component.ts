import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LieuService } from 'src/app/services/lieu.service';
import { Router } from '@angular/router';
import { Site } from 'src/app/models/site.model';

@Component({
  selector: 'app-site-new',
  templateUrl: './site-new.component.html',
  styleUrls: ['./site-new.component.scss']
})
export class SiteNewComponent implements OnInit {

  siteForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private lieuService: LieuService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.siteForm = this.formBuilder.group({
        nom: ['', Validators.required],
        description: ['', Validators.required],
        etat: false
      }
    );
  }
  onSaveSite() {
    const newSite = new Site();
    newSite.nom = this.siteForm.get('nom').value;
    newSite.description = this.siteForm.get('description').value;
    newSite.etat = this.siteForm.get('etat').value;

    console.log(newSite);
    this.lieuService.createNewSite(newSite);
    this.router.navigate(['lieuList']);
  }
  onBack() {
    this.router.navigate(['lieuList']);
  }
}

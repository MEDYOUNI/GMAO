import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Site } from 'src/app/models/site.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LieuService } from 'src/app/services/lieu.service';

@Component({
  selector: 'app-site-modify',
  templateUrl: './site-modify.component.html',
  styleUrls: ['./site-modify.component.scss']
})
export class SiteModifyComponent implements OnInit {

  siteForm: FormGroup;
  site: Site;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private lieuService: LieuService,
              private router: Router) { }

  ngOnInit(): void {
    this.siteForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      etat: false
    });
    this.site = new Site();
    this.site.nom = '';
    this.site.description = '';
    this.site.etat = false;

    const id = this.route.snapshot.params['id'];
    this.lieuService.getOneSite(id).then(
      (site: Site) => {
        this.site = site;
        this.siteForm.get('nom').setValue(this.site.nom);
        this.siteForm.get('description').setValue(this.site.description);
        this.siteForm.get('etat').setValue(this.site.etat);
      }
    );
  }
  onSaveSite() {
    const newSite = new Site();
    newSite._id = this.site._id;
    newSite.nom = this.siteForm.get('nom').value;
    newSite.description = this.siteForm.get('description').value;
    newSite.etat = this.siteForm.get('etat').value;

    this.lieuService.modifySite(newSite);
    this.router.navigate(['lieuList']);
  }
  onBack() {
    this.router.navigate(['lieuList']);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LieuService } from 'src/app/services/lieu.service';
import { Router } from '@angular/router';
import { Atelier } from 'src/app/models/atelier.model';
import { Subscription } from 'rxjs';
import { Site } from 'src/app/models/site.model';
import { Secteur } from 'src/app/models/secteur.model';

@Component({
  selector: 'app-atelier-new',
  templateUrl: './atelier-new.component.html',
  styleUrls: ['./atelier-new.component.scss']
})
export class AtelierNewComponent implements OnInit, OnDestroy {

  atelierForm: FormGroup;
  siteSubscription: Subscription;
  secteurSubscription: Subscription;
  sites: Site[];
  secteurs: Secteur[];

  constructor(private formBuilder: FormBuilder,
              private lieuService: LieuService,
              private router: Router) { }
  ngOnDestroy(): void {
    this.siteSubscription.unsubscribe();
    this.secteurSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loadSites();
    this.loadSecteurs();
    this.atelierForm = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        description: ['', Validators.required],
        etat: false,
        site: ['', Validators.required],
        secteur: ['', Validators.required]
      }
    );
  }
  onSaveAtelier() {
    const newAtelier = new Atelier();
    newAtelier.nom = this.atelierForm.get('nom').value;
    newAtelier.description = this.atelierForm.get('description').value;
    newAtelier.etat = this.atelierForm.get('etat').value;
    newAtelier.site = this.atelierForm.get('site').value;
    newAtelier.secteur = this.atelierForm.get('secteur').value;

    console.log(newAtelier);
    this.lieuService.createNewAtelier(newAtelier);
    this.router.navigate(['lieuList']);
  }
  loadSites() {
    this.siteSubscription = this.lieuService.siteSubject.subscribe(
      (site: Site[]) => {
        this.sites = site;
      }
    );
    this.lieuService.getSite();
    this.lieuService.emitSite();
  }
  loadSecteurs() {
    this.secteurSubscription = this.lieuService.secteurSubject.subscribe(
      (secteur: Secteur[]) => {
        this.secteurs = secteur;
      }
    );
    this.lieuService.getSecteur();
    this.lieuService.emitSecteur();
  }
  onBack() {
    this.router.navigate(['lieuList']);
  }

}

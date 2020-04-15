import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Atelier } from 'src/app/models/atelier.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LieuService } from 'src/app/services/lieu.service';
import { Subscription } from 'rxjs';
import { Site } from 'src/app/models/site.model';
import { Secteur } from 'src/app/models/secteur.model';

@Component({
  selector: 'app-atelier-modify',
  templateUrl: './atelier-modify.component.html',
  styleUrls: ['./atelier-modify.component.scss']
})
export class AtelierModifyComponent implements OnInit {

  atelierForm: FormGroup;
  atelier: Atelier;
  siteSubscription: Subscription;
  secteurSubscription: Subscription;
  sites: Site[];
  secteurs: Secteur[];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private lieuService: LieuService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadSites();
    this.loadSecteurs();

    this.atelierForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      etat: false,
      site: '',
      secteur: ''
    });
    this.atelier = new Atelier();
    this.atelier.nom = '';
    this.atelier.description = '';
    this.atelier.etat = false;
    this.atelier.site = '';
    this.atelier.secteur = '';

    const id = this.route.snapshot.params['id'];
    this.lieuService.getOneAtelier(id).then(
      (atelier: Atelier) => {
        this.atelier = atelier;
        this.atelierForm.get('nom').setValue(this.atelier.nom);
        this.atelierForm.get('description').setValue(this.atelier.description);
        this.atelierForm.get('etat').setValue(this.atelier.etat);
        this.atelierForm.get('site').setValue(this.atelier.site);
        this.atelierForm.get('secteur').setValue(this.atelier.secteur);
      }
    );
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
  onSaveAtelier() {
    const newAtelier = new Atelier();
    newAtelier._id = this.atelier._id;
    newAtelier.nom = this.atelierForm.get('nom').value;
    newAtelier.description = this.atelierForm.get('description').value;
    newAtelier.etat = this.atelierForm.get('etat').value;
    newAtelier.site = this.atelierForm.get('site').value;
    newAtelier.secteur = this.atelierForm.get('secteur').value;

    this.lieuService.modifyAtelier(newAtelier);
    this.router.navigate(['lieuList']);
  }
  onBack() {
    this.router.navigate(['lieuList']);
  }

}

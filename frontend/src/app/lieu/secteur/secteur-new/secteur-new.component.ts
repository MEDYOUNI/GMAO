import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LieuService } from 'src/app/services/lieu.service';
import { Router } from '@angular/router';
import { Secteur } from 'src/app/models/secteur.model';
import { Site } from 'src/app/models/site.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-secteur-new',
  templateUrl: './secteur-new.component.html',
  styleUrls: ['./secteur-new.component.scss']
})
export class SecteurNewComponent implements OnInit, OnDestroy {

  secteurForm: FormGroup;
  siteSubscription: Subscription;
  sites: Site[];

  constructor(private formBuilder: FormBuilder,
              private lieuService: LieuService,
              private router: Router) { }
  ngOnDestroy(): void {
    this.siteSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loadSites();
    this.secteurForm = this.formBuilder.group({
        nom: ['', Validators.required],
        description: ['', Validators.required],
        etat: false,
        site: ['', Validators.required]
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
  onSaveSecteur() {
    const newSecteur = new Secteur();
    newSecteur.nom = this.secteurForm.get('nom').value;
    newSecteur.description = this.secteurForm.get('description').value;
    newSecteur.etat = this.secteurForm.get('etat').value;
    newSecteur.site = this.secteurForm.get('site').value;

    console.log(newSecteur);
    this.lieuService.createNewSecteur(newSecteur);
    this.router.navigate(['lieuList']);
  }
  onBack() {
    this.router.navigate(['lieuList']);
  }
}

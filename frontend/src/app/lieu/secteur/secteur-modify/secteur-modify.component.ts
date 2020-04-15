import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Secteur } from 'src/app/models/secteur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LieuService } from 'src/app/services/lieu.service';
import { Subscription } from 'rxjs';
import { Site } from 'src/app/models/site.model';

@Component({
  selector: 'app-secteur-modify',
  templateUrl: './secteur-modify.component.html',
  styleUrls: ['./secteur-modify.component.scss']
})
export class SecteurModifyComponent implements OnInit, OnDestroy {

  secteurForm: FormGroup;
  secteur: Secteur;
  siteSubscription: Subscription;
  sites: Site[];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private lieuService: LieuService,
              private router: Router) { }
  ngOnDestroy(): void {
    this.siteSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadSites();

    this.secteurForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      etat: false,
      site: ['', Validators.required],
    });
    this.secteur = new Secteur();
    this.secteur.nom = '';
    this.secteur.description = '';
    this.secteur.etat = false;
    this.secteur.site = '';

    const id = this.route.snapshot.params['id'];
    this.lieuService.getOneSecteur(id).then(
      (secteur: Secteur) => {
        this.secteur = secteur;
        this.secteurForm.get('nom').setValue(this.secteur.nom);
        this.secteurForm.get('description').setValue(this.secteur.description);
        this.secteurForm.get('etat').setValue(this.secteur.etat);
        this.secteurForm.get('site').setValue(this.secteur.site);
        //this.selectedSite = this.secteur.site;
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
    newSecteur._id = this.secteur._id;
    newSecteur.nom = this.secteurForm.get('nom').value;
    newSecteur.description = this.secteurForm.get('description').value;
    newSecteur.etat = this.secteurForm.get('etat').value;
    newSecteur.site = this.secteurForm.get('site').value;

    this.lieuService.modifySecteur(newSecteur);
    this.router.navigate(['lieuList']);
  }
  onBack() {
    this.router.navigate(['lieuList']);
  }

}

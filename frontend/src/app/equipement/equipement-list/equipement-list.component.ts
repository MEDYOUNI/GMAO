import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipementService } from 'src/app/services/equipement.service';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/models/equipement.model';
import { Subscription } from 'rxjs';
import { LieuService } from 'src/app/services/lieu.service';
import { Site } from 'src/app/models/site.model';
import { Secteur } from 'src/app/models/secteur.model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.scss']
})
export class EquipementListComponent implements OnInit, OnDestroy {

  dataSource: Equipement[];
  loading = false;
  equipSubscription: Subscription;
  displayedColumns: string[] = ['nom', 'description', 'type', 'site', 'secteur', 'zone', 'flux', 'actions'];
  siteSubscription: Subscription;
  sites: Site[];
  secteurSubscription: Subscription;
  secteurs: Secteur[];
  equipements: Equipement[];

  constructor(private equipementService: EquipementService,
              private lieuService: LieuService,
              private router: Router) { }

  ngOnDestroy(): void {
    this.siteSubscription.unsubscribe();
    this.equipSubscription.unsubscribe();
    this.secteurSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadSites();
    this.loadSecteurs()
    this.loadEquipements();
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
  loadEquipements() {
    this.loading = true;
    this.equipSubscription = this.equipementService.equipementSubject.subscribe((response: Equipement[]) => {
      if (response) {
        this.equipements = response;
        this.dataSource = response;
        this.loading = false;
      }
    });
    this.equipementService.getEquipements();
    this.equipementService.emitEquipement();
  }
  onViewEquipement(equipement: Equipement) {
    console.log(equipement._id);
    this.router.navigate(['/equipement/equipementModify/' + equipement._id]);
  }
  onCreateNewEquipement() {
    this.router.navigate(['/equipement/', 'equipementNew']);
  }
  onDeleteEquipement(equipement: Equipement) {
    this.equipementService.removeEquipement(equipement);
  }
  onChangeSite(site: string) {
    console.log(site);
    this.dataSource = this.equipements.filter(isSelectedSite);
    function isSelectedSite(element, index, array) {
          return (element.site === site);
       }
  }
  onChangeSecteur(secteur: string) {
    this.dataSource = this.equipements.filter(isSelectedSecteur);
    function isSelectedSecteur(element, index, array) {
          return (element.secteur === secteur);
       }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Secteur } from 'src/app/models/secteur.model';
import { LieuService } from 'src/app/services/lieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secteur-list',
  templateUrl: './secteur-list.component.html',
  styleUrls: ['./secteur-list.component.scss']
})
export class SecteurListComponent implements OnInit, OnDestroy {

  secteur: Secteur[];
  loading = false;
  atelierSubscription: Subscription;
  displayedColumns: string[] = ['etat', 'nom', 'description', 'site', 'actions'];

  dataSource: Secteur[];
  constructor(private lieuService: LieuService,
              private router: Router) { }

  ngOnDestroy(): void {
    this.atelierSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loading = true;
    this.atelierSubscription = this.lieuService.secteurSubject.subscribe(
      (secteur: Secteur[]) => {
        this.dataSource = secteur;
        this.loading = false;
      }
    );
    this.lieuService.getSecteur();
    this.lieuService.emitSecteur();
  }
  onViewSecteur(secteur: Secteur) {
    console.log(secteur._id);
    this.router.navigate(['lieuList/secteurList/secteurModify/' + secteur._id]);
  }
  onCreateNewSecteur() {
    this.router.navigate(['lieuList/secteurList/', 'secteurNew']);
  }
  onDeleteSecteur(secteur: Secteur) {
    this.lieuService.removeSecteur(secteur);
  }
}
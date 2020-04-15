import { Component, OnInit, OnDestroy } from '@angular/core';
import { Atelier } from 'src/app/models/atelier.model';
import { Subscription } from 'rxjs';
import { LieuService } from 'src/app/services/lieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atelier-list',
  templateUrl: './atelier-list.component.html',
  styleUrls: ['./atelier-list.component.scss']
})
export class AtelierListComponent implements OnInit, OnDestroy {

  atelier: Atelier[];
  loading = false;
  atelierSubscription: Subscription;
  displayedColumns: string[] = ['etat', 'nom', 'description', 'site', 'secteur', 'actions'];

  dataSource: Atelier[];
  constructor(private lieuService: LieuService,
              private router: Router) { }

  ngOnDestroy(): void {
    this.atelierSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loading = true;
    this.atelierSubscription = this.lieuService.atelierSubject.subscribe(
      (atelier: Atelier[]) => {
        this.dataSource = atelier;
        this.loading = false;
      }
    );
    this.lieuService.getAtelier();
    this.lieuService.emitAtelier();
  }
  onViewAtelier(atelier: Atelier) {
    console.log(atelier._id);
    this.router.navigate(['lieuList/atelierList/atelierModify/' + atelier._id]);
  }
  onCreateNewAtelier() {
    this.router.navigate(['/lieuList/atelierList/', 'atelierNew']);
  }
  onDeleteAtelier(atelier: Atelier) {
    this.lieuService.removeAtelier(atelier);
  }
}

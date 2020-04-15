import { Component, OnInit, OnDestroy } from '@angular/core';
import { Avis } from '../../Models/avis.model';
import { Subscription } from 'rxjs';
import { AvisService } from '../../services/avis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avis-table',
  templateUrl: './avis-table.component.html',
  styleUrls: ['./avis-table.component.scss']
})
export class AvisTableComponent implements OnInit, OnDestroy {

  avis: Avis[];
  loading = false;
  avisSubscription: Subscription;
  displayedColumns: string[] = ['equipement', 'typeEquipement', 'typeIncident', 'description', 'declarant', 'actions'];
  dataSource: Avis[];

  constructor(private avisService: AvisService,
              private router: Router) { }

  ngOnDestroy(): void {
    this.avisSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loading = true;
    this.avisSubscription = this.avisService.avisSubject.subscribe(
      (avis: Avis[]) => {
        this.dataSource = avis;
        this.loading = false;
      }
    );
    this.avisService.getAvis();
    this.avisService.emitAvis();
  }
  onViewAvis(avis: Avis) {
    console.log(avis._id);
    this.router.navigate(['avis/avisModify/' + avis._id]);
  }
  onCreateNewAvis() {
    this.router.navigate(['/avis/', 'newAvis']);
  }
  onDeleteAvis(avis: Avis) {
    this.avisService.removeAvis(avis);
  }
}

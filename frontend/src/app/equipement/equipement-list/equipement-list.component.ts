import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipementService } from 'src/app/services/equipement.service';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/models/equipement.model';
import { Subscription } from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.scss']
})
export class EquipementListComponent implements OnInit, OnDestroy {

  foods: Food[] = [
    {value: '0', viewValue: 'Dunkerque-Mardyck'},
    {value: '1', viewValue: 'Florange'},
    {value: '2', viewValue: 'Montataire'}
  ];

  dataSource: Equipement[];
  loading = false;
  equipSubscription: Subscription;
  displayedColumns: string[] = ['nom', 'description', 'type', 'site', 'secteur', 'zone', 'flux', 'actions'];
  constructor(private equipementService: EquipementService,
              private router: Router) { }
  ngOnDestroy(): void {
    this.equipSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loading = true;
    this.equipSubscription = this.equipementService.equipementSubject.subscribe((response: Equipement[]) => {
      if (response) {
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

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipementService } from 'src/app/services/equipement.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipement } from 'src/app/models/equipement.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-equipement-modify',
  templateUrl: './equipement-modify.component.html',
  styleUrls: ['./equipement-modify.component.scss']
})
export class EquipementModifyComponent implements OnInit {

  equipementForm: FormGroup;
  equipement: Equipement;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private equipementService: EquipementService,
              private router: Router) { }

  ngOnInit(): void {
    this.equipementForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      secteur: ['', Validators.required],
      site: ['', Validators.required],
      zone: ['', Validators.required],
      flux: ['', Validators.required]
    });
    this.equipement = new Equipement();
    this.equipement.nom = '';
    this.equipement.description = '';
    this.equipement.type = '';
    this.equipement.secteur = '';
    this.equipement.site = '';
    this.equipement.zone = '';
    this.equipement.flux = '';

    const id = this.route.snapshot.params['id'];
    this.equipementService.getOneEquipement(id).then(
      (equipement: Equipement) => {
        this.equipement = equipement;
        this.equipementForm.get('nom').setValue(this.equipement.nom);
        this.equipementForm.get('description').setValue(this.equipement.description);
        this.equipementForm.get('type').setValue(this.equipement.type);
        this.equipementForm.get('secteur').setValue(this.equipement.secteur);
        this.equipementForm.get('site').setValue(this.equipement.site);
        this.equipementForm.get('zone').setValue(this.equipement.zone);
        this.equipementForm.get('flux').setValue(this.equipement.flux);
      }
    );
  }
  onSaveEquipement() {
    const newEquipement = new Equipement();
    newEquipement._id = this.equipement._id;
    newEquipement.nom = this.equipementForm.get('nom').value;
    newEquipement.description = this.equipementForm.get('description').value;
    newEquipement.type = this.equipementForm.get('type').value;
    newEquipement.secteur = this.equipementForm.get('secteur').value;
    newEquipement.site = this.equipementForm.get('site').value;
    newEquipement.zone = this.equipementForm.get('zone').value;
    newEquipement.flux = this.equipementForm.get('flux').value;

    this.equipementService.modifyEquipement(newEquipement);
    this.router.navigate(['equipementList']);
  }
  onBack() {
    this.router.navigate(['equipementList']);
  }

}

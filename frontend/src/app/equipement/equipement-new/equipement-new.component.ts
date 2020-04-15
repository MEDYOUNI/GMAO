import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipementService } from 'src/app/services/equipement.service';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/models/equipement.model';

@Component({
  selector: 'app-equipement-new',
  templateUrl: './equipement-new.component.html',
  styleUrls: ['./equipement-new.component.scss']
})
export class EquipementNewComponent implements OnInit {

  equipementForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private equipementService: EquipementService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.equipementForm = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        description: ['', Validators.required],
        type: ['', Validators.required],
        site: ['', Validators.required],
        secteur: ['', Validators.required],
        zone: ['', Validators.required],
        flux: ['', Validators.required]
      }
    );
  }
  onSaveEquipement() {
    const newEquipement = new Equipement();
    newEquipement.nom = this.equipementForm.get('nom').value;
    newEquipement.description = this.equipementForm.get('description').value;
    newEquipement.type = this.equipementForm.get('type').value;
    newEquipement.site = this.equipementForm.get('site').value;
    newEquipement.secteur = this.equipementForm.get('secteur').value;
    newEquipement.zone = this.equipementForm.get('zone').value;
    newEquipement.flux = this.equipementForm.get('flux').value;

    console.log(newEquipement);
    this.equipementService.createNewEquipement(newEquipement);
    this.router.navigate(['equipementList']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisService } from '../../services/avis.service';
import { Router } from '@angular/router';
import { Avis } from '../../Models/avis.model';

@Component({
  selector: 'app-avis-new',
  templateUrl: './avis-new.component.html',
  styleUrls: ['./avis-new.component.scss']
})
export class AvisNewComponent implements OnInit {

  avisForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private avisService: AvisService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.avisForm = this.formBuilder.group(
      {
        equipement: ['', Validators.required],
        typeEquipement: ['', Validators.required],
        typeIncident: ['', Validators.required],
        description: ['', Validators.required],
        declarant: ['', Validators.required]
        // ,
        // debut: [new Date(), Validators.required],
        // fin: [ new Date(), Validators.required]
      }
    );
  }
  onSaveAvis() {
    const newAvis = new Avis();
    newAvis.equipement = this.avisForm.get('equipement').value;
    newAvis.typeEquipement = this.avisForm.get('typeEquipement').value;
    newAvis.typeIncident = this.avisForm.get('typeIncident').value;
    newAvis.description = this.avisForm.get('description').value;
    newAvis.declarant = this.avisForm.get('declarant').value;

    this.avisService.createNewAvis(newAvis);
    this.router.navigate(['avisTable']);
  }
}

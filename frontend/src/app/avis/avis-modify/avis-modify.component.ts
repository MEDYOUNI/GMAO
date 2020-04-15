import { Component, OnInit } from '@angular/core';
import {Avis} from '../../Models/avis.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AvisService} from '../../services/avis.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-avis-modify',
  templateUrl: './avis-modify.component.html',
  styleUrls: ['./avis-modify.component.scss']
})
export class AvisModifyComponent implements OnInit {

  avisForm: FormGroup;
  avis: Avis;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private avisService: AvisService,
              private router: Router) { }

  ngOnInit(): void {
    this.avisForm = this.formBuilder.group({
      equipement: ['', Validators.required],
      typeEquipement: ['', Validators.required],
      typeIncident: ['', Validators.required],
      description: ['', Validators.required],
      declarant: ['', Validators.required]
    });
    this.avis = new Avis();
    this.avis.equipement = '';
    this.avis.typeEquipement = '';
    this.avis.typeIncident = '';
    this.avis.description = '';
    this.avis.declarant = '';

    const id = this.route.snapshot.params['id'];
    this.avisService.getOneAvis(id).then(
      (avis: Avis) => {
        this.avis = avis;
        this.avisForm.get('equipement').setValue(this.avis.equipement);
        this.avisForm.get('typeEquipement').setValue(this.avis.typeEquipement);
        this.avisForm.get('typeIncident').setValue(this.avis.typeIncident);
        this.avisForm.get('description').setValue(this.avis.description);
        this.avisForm.get('declarant').setValue(this.avis.declarant);
      }
    );
  }
  onSaveAvis() {
    const newAvis = new Avis();
    newAvis._id = this.avis._id;
    newAvis.equipement = this.avisForm.get('equipement').value;
    newAvis.typeEquipement = this.avisForm.get('typeEquipement').value;
    newAvis.typeIncident = this.avisForm.get('typeIncident').value;
    newAvis.description = this.avisForm.get('description').value;
    newAvis.declarant = this.avisForm.get('declarant').value;

    this.avisService.modifyAvis(newAvis);
    this.router.navigate(['avisTable']);
  }
  onBack() {
    this.router.navigate(['avisTable']);
  }

}

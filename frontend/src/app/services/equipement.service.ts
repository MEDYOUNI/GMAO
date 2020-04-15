import { Injectable } from '@angular/core';
import { Equipement } from '../models/equipement.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  equipement: Equipement[] = [];
  equipementSubject = new Subject<Equipement[]>();

  constructor(private http: HttpClient) { }
  // Une methode qui permet de renvoyer ce qu'on dans l'array avis a travers le pattern subject
  emitEquipement() {
    this.equipementSubject.next(this.equipement.slice());
  }

  getEquipements() {
      this.http.get(environment.URL + '/api/equipement').subscribe(
        (data: Equipement[]) => {
          if (data) {
            this.equipement = data;
            this.emitEquipement();
          }
        }, (error) => {
          console.log(error);
          }
        );
      }
  getOneEquipement(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.URL + '/api/equipement/' + id).subscribe(
        (response) => {
          resolve(response);
          console.log(resolve(response));
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
    });
  }
  createNewEquipement(equipement: Equipement) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.URL + '/api/equipement', equipement).subscribe(
        (response) => {
          resolve(response);
          console.log(equipement);
          console.log(resolve(response));
        },
        (error) => {
          console.log(equipement);
          reject(error);
          console.log(error);
        }
      );
    });
  }
  removeEquipement(equipement: Equipement) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.URL + '/api/equipement/' + equipement._id).subscribe(
        (response) => {
          resolve(response);
          console.log(resolve(response));
          // on recupere la liste des avis après la suppression afin de mettre a jour notre tableau
          this.getEquipements();
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
    });
  }
  modifyEquipement(equipement: Equipement) {
    return new Promise((resolve, reject) => {
      this.http.put(environment.URL + '/api/equipement/' + equipement._id, equipement).subscribe(
        (response) => {
          resolve(response);
          // console.log(resolve(response));
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
    });
  }
}

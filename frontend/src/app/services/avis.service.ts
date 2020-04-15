import { Injectable } from '@angular/core';
import { Avis } from '../Models/avis.model';
import { Subject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  avis: Avis[] = [];
  avisSubject = new Subject<Avis[]>();

  constructor(private http: HttpClient) { }
  // Une methode qui permet de renvoyer ce qu'on dans l'array avis a travers le pattern subject
  emitAvis() {
    this.avisSubject.next(this.avis.slice());
  }
  saveAvis() {
    // firebase.database().ref('/avis').set(this.avis);
  }
  getAvis() {
      this.http.get(environment.URL + '/avis').subscribe(
        (data: Avis[]) => {
          if (data) {
            this.avis = data;
            this.emitAvis();
          }
        }, (error) => {
          console.log(error);
          }
        );
      }
  getOneAvis(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.URL + '/avis/' + id).subscribe(
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
  createNewAvis(avis: Avis) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.URL + '/avis', avis).subscribe(
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
  removeAvis(avis: Avis) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.URL + '/avis/' + avis._id).subscribe(
        (response) => {
          resolve(response);
          console.log(resolve(response));
          // on recupere la liste des avis après la suppression afin de mettre a jour notre tableau
          this.getAvis();
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
    });
  }
  modifyAvis(avis: Avis) {
    return new Promise((resolve, reject) => {
      this.http.put(environment.URL + '/avis/' + avis._id, avis).subscribe(
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

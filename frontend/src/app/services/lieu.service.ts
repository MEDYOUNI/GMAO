import { Injectable } from '@angular/core';
import { Site } from '../models/site.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Atelier } from '../models/atelier.model';
import { Secteur } from '../models/secteur.model';

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  site: Site[] = [];
  siteSubject = new  Subject<Site[]>();

  secteur: Secteur[] = [];
  secteurSubject = new  Subject<Secteur[]>();

  atelier: Atelier[] = [];
  atelierSubject = new  Subject<Atelier[]>();

  constructor(private http: HttpClient) { }

//#region Site
  // Une methode qui permet de renvoyer ce qu'on dans l'array avis a travers le pattern subject
  emitSite() {
    this.siteSubject.next(this.site.slice());
  }
  getSite() {
      this.http.get(environment.URL + '/api/site').subscribe(
        (data: Site[]) => {
          if (data) {
            this.site = data;
            this.emitSite();
          }
        }, (error) => {
          console.log(error);
          }
        );
      }
  getOneSite(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.URL + '/api/site/' + id).subscribe(
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
  createNewSite(site: Site) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.URL + '/api/site', site).subscribe(
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
  removeSite(site: Site) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.URL + '/api/site/' + site._id).subscribe(
        (response) => {
          resolve(response);
          console.log(resolve(response));
          // on recupere la liste des avis après la suppression afin de mettre a jour notre tableau
          this.getSite();
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
    });
  }
  modifySite(site: Site) {
    return new Promise((resolve, reject) => {
      this.http.put(environment.URL + '/api/site/' + site._id, site).subscribe(
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
//#endregion

//#region Secteur
  // Une methode qui permet de renvoyer ce qu'on dans l'array avis a travers le pattern subject
  emitSecteur() {
    this.secteurSubject.next(this.secteur.slice());
  }
  getSecteur() {
      this.http.get(environment.URL + '/api/secteur').subscribe(
        (data: Secteur[]) => {
          if (data) {
            this.secteur = data;
            this.emitSecteur();
          }
        }, (error) => {
          console.log(error);
          }
        );
      }
  getOneSecteur(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.URL + '/api/secteur/' + id).subscribe(
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
  createNewSecteur(secteur: Secteur) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.URL + '/api/secteur', secteur).subscribe(
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
  removeSecteur(secteur: Secteur) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.URL + '/api/secteur/' + secteur._id).subscribe(
        (response) => {
          resolve(response);
          console.log(resolve(response));
          // on recupere la liste des avis après la suppression afin de mettre a jour notre tableau
          this.getSecteur();
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
    });
  }
  modifySecteur(secteur: Secteur) {
    return new Promise((resolve, reject) => {
      this.http.put(environment.URL + '/api/secteur/' + secteur._id, secteur).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
    });
  }
//#endregion

//#region Site
  // Une methode qui permet de renvoyer ce qu'on dans l'array avis a travers le pattern subject
  emitAtelier() {
    this.atelierSubject.next(this.atelier.slice());
  }
  getAtelier() {
      this.http.get(environment.URL + '/api/atelier').subscribe(
        (data: Atelier[]) => {
          if (data) {
            this.atelier = data;
            this.emitAtelier();
          }
        }, (error) => {
          console.log(error);
          }
        );
      }
  getOneAtelier(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.URL + '/api/atelier/' + id).subscribe(
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
  createNewAtelier(atelier: Atelier) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.URL + '/api/atelier', atelier).subscribe(
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
  removeAtelier(atelier: Atelier) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.URL + '/api/atelier/' + atelier._id).subscribe(
        (response) => {
          resolve(response);
          console.log(resolve(response));
          // on recupere la liste des avis après la suppression afin de mettre a jour notre tableau
          this.getAtelier();
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
    });
  }
  modifyAtelier(atelier: Atelier) {
    return new Promise((resolve, reject) => {
      this.http.put(environment.URL + '/api/atelier/' + atelier._id, atelier).subscribe(
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
//#endregion
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string;
  userId: string;

  constructor(private router: Router,
              private http: HttpClient) { }

  createNewUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        environment.URL + '/api/auth/signup',
        { email: email, password: password })
        .subscribe(
          () => {
            this.signInUser(email, password).then(
              () => {
                resolve();
              }
            ).catch(
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        environment.URL + '/api/auth/login',
        { email: email, password: password })
        .subscribe(
          (authData: { token: string, userId: string }) => {
            this.token = authData.token;
            this.userId = authData.userId;
            this.isAuth$.next(true);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  singOut() {
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
    console.log('Déconnexion de l utilisateur');
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  return Observable.create(
    (observer) => {
      this.authService.isAuth$.subscribe(
        (auth) => {
          if (!auth) {
            this.router.navigate(['/auth', 'signin']);
          }
          observer.next(true);
        }
      );
    }
  );
}
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return new Promise(
  //     (resolve, reject) => {
  //       firebase.auth().onAuthStateChanged(
  //         (user) => {
  //           if (user) {
  //             resolve(true);
  //           }else {
  //             this.route.navigate(['/auth', 'signin']);
  //             resolve(false);
  //           }
  //       }
  //       );
  //     }
  //   );
  // }
}

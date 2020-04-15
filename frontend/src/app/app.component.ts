import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gmao';
  constructor() {
      // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyCFivrYf2A8RiaJZxBDYsTboGVGI3s5T9M",
    authDomain: "gmao-6fd3b.firebaseapp.com",
    databaseURL: "https://gmao-6fd3b.firebaseio.com",
    projectId: "gmao-6fd3b",
    storageBucket: "gmao-6fd3b.appspot.com",
    messagingSenderId: "142609361314",
    appId: "1:142609361314:web:d39de1ff000e3a86e26afb",
    measurementId: "G-7NL10SYREJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}

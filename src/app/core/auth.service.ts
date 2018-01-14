import { Injectable } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth";
import { Router} from "@angular/router";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  logIn(){
    this._firebaseAuth.auth.signInAnonymously();
    this.router.navigate(['/users']);
  }

}

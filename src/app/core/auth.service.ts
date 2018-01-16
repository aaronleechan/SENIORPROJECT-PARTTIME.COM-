import { Injectable } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth";
import { Router} from "@angular/router";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import {UserService } from "../users/shared/user.service";

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  googleProvider = new firebase.auth.GoogleAuthProvider();
  public checkLogIn: boolean;


  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  logIn(){
    this._firebaseAuth.auth.signInAnonymously();
    console.log("Success Log In");
    this.router.navigate(['/users']);
    this.checkLogIn = true;
  }

  logInWithGoogle(){
    // this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this._firebaseAuth.auth.signInWithPopup(this.googleProvider).then(
      function(result){
      var token = result.credential.accessToken;
      var user = result.user;
      //console.log( " Email " + this._firebaseAuth.auth.currentUser.email);
        this.checkLogIn = true;
      console.log( token + " <---Success Log In------> " + user.email);
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(" ERROR ==> " + error);
    });
  }

  logOut(){
    this._firebaseAuth.auth.signOut();
    this.checkLogIn = false;
    this.router.navigate(['']);
  }

}


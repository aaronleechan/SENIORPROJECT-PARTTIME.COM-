import { Injectable } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth";
import { Router} from "@angular/router";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import {UserService } from "../users/shared/user.service";
import {User} from "../users/shared/user.model";

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  googleProvider = new firebase.auth.GoogleAuthProvider();
  public userChecker: boolean;
  users: any;
  currentuserEmail: string;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  logIn(){
    this._firebaseAuth.auth.signInAnonymously();
    console.log("Success Log In ");
  }

  logInWithGoogle(){
    // this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this._firebaseAuth.auth.signInWithPopup(this.googleProvider).then(
      function(result){
      var token = result.credential.accessToken;
      var user = result.user;

    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(" ERROR ==> " + error);
    });
    this.userCheckerLogIn;
  }

  logOut(){
    this._firebaseAuth.auth.signOut();
    this.currentuserEmail = null;
    this.router.navigate(['']);
  }

   get userCheckerLogIn(){
    if(this._firebaseAuth.auth.currentUser == null){
      this.userChecker = true;
      return this.userChecker;
    }else{
      this.userChecker = false;
      this.currentuserEmail = this._firebaseAuth.auth.currentUser.email;
      return this.userChecker;
    }
  }



}

// ngOnInit() {
//   var x = this.userservice.getData();
//   x.snapshotChanges().subscribe(item => {
//     this.userList = [];
//     item.forEach(element => {
//       var y = element.payload.toJSON();
//       y["$key"] = element.key;
//       this.userList.push(y as User);
//     });
//   });
// }


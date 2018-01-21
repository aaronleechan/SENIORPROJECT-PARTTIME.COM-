import { Injectable } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router} from "@angular/router";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import {UserService } from "../users/shared/user.service";
import {User} from "../users/shared/user.model";
import 'rxjs/addoperator/switchMap';

interface CurrentUser{
  uid: string;
  email: string;
}

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  googleProvider = new firebase.auth.GoogleAuthProvider();
  public userChecker: boolean;
  currentUser: Observable<CurrentUser>;


  constructor(private _firebaseAuth: AngularFireAuth, private router: Router,
              private angularfirestore: AngularFirestore  ) {
    this.user = _firebaseAuth.authState;

    this.currentUser  = this._firebaseAuth.authState.switchMap(currentuser=>{
      if(currentuser){
        return this.angularfirestore.doc<CurrentUser>('users/${user.id}').valueChanges()
      }else{
        return Observable.of(null)
      }
    })
  }

  logIn(){
    this._firebaseAuth.auth.signInAnonymously();
    console.log("Success Log In ");
  }

  logInWithGoogle(){
    // this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this._firebaseAuth.auth.signInWithPopup(this.googleProvider).then(
      (credential)=>{
        this.updateUserData(credential.currentuser)
      }
    ).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(" ERROR ==> " + error);
    });
    this.userCheckerLogIn;
  }

  private updateUserData(currentuser){
    const userRef: AngularFirestoreDocument<any> = this.angularfirestore.doc('users/${user.uid}');

    const data: CurrentUser = {
      uid: currentuser.uid,
      email: currentuser.email
    }
    return userRef.set(data);
  }

  logOut(){
    this._firebaseAuth.auth.signOut();
    this.router.navigate(['']);
  }

   get userCheckerLogIn(){
    if(this._firebaseAuth.auth.currentUser == null){
      this.userChecker = true;
      return this.userChecker;
    }else{
      this.userChecker = false;
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


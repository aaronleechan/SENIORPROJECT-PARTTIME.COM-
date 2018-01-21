import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {UserService} from "../shared/user.service";
import { AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [UserService]
})
export class UserloginComponent implements OnInit {
  user: Observable<firebase.User>;
  userEmail: any;

  constructor(private route: Router, private auth: AuthService, private userservice: UserService,
              private firebaseauth: AngularFireAuth ) { }

  ngOnInit() {

  }

  testLogIn(){
    this.auth.logIn();
    this.route.navigate(['/users']);
  }

  googleLogIn(){
    this.auth.logInWithGoogle();
  }

}

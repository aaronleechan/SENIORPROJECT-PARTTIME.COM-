import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit() {
  }


  testLogIn(){
    this.auth.logIn();
  }

  googleLogIn(){
    this.auth.logInWithGoogle();
  }

}

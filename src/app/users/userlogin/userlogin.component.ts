import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit() {
  }


  testLogIn(){
    this.auth.logIn();
  }

  googleLogIn(){
    console.log("Google Log IN");
    this.auth.logInWithGoogle();
  }

}

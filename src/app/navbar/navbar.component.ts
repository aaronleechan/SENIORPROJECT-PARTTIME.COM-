import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { AuthService} from "../core/auth.service";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {async} from "q";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  checkLogIn: boolean

  constructor(private route: Router, private auth: AuthService) {
    this.checkLogIn = false;
  }

  ngOnInit() {
    this.checkuser();
  }

  logIn(){
    this.route.navigate(['/userlogin']);
  }

  logout(){
    this.checkLogIn = this.auth.checkLogIn;
    this.auth.logOut();
  }

  checkuser(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log( " TTTTTTTTTTTTTTT " );
        this.checkLogIn = true;
        console.log( "TTTTTTTTTTTTTTT" + this.checkLogIn );
        console.log( "______________________>>>>> " + this.auth.checkLogIn );
        // User is signed in.
      } else {
        console.log( " FFFFFFFFFFFFFFF " );
        // No user is signed in.
        this.checkLogIn = false;
        console.log( "FFFFFFFFFFFFFFF" + this.checkLogIn );
        console.log( "______________________>>>>> " + this.auth.checkLogIn );
      }
    });
  }


}

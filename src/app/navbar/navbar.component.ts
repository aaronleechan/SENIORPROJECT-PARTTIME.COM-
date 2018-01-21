import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { AuthService} from "../core/auth.service";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {UserService} from "../users/shared/user.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {

  userEmail: string;

  constructor(private route: Router, private auth: AuthService, private userservice: UserService) {
  }

  ngOnInit() {

  }

  logIn(){
    this.route.navigate(['/userlogin']);
  }

  logout(){
    this.auth.logOut();
  }

  searchPage(){
    this.route.navigate(['/searchpage']);
  }
}

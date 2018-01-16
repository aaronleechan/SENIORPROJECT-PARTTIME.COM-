import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { AuthService} from "../core/auth.service";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  checkLogIn: boolean

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  logIn(){

    this.route.navigate(['/userlogin']);
    this.checkLogIn = true;

  }

  logout(){

    this.auth.logOut();
    this.checkLogIn = false;

  }

}

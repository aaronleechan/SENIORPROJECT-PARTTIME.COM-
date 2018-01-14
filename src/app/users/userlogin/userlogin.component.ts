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
    console.log("TESTING");
    this.auth.logIn();
  }

}

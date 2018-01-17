import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { AuthService} from "../core/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  SearchPage(){
    this.route.navigate(['/users']);
  }

}

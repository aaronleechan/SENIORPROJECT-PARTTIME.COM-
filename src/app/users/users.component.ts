import { Component, OnInit } from '@angular/core';
import { UserService} from './shared/user.service';
import { AuthService} from "../core/auth.service";
import {UserListComponent} from "./user-list/user-list.component";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService,UserListComponent]
})
export class UsersComponent implements OnInit {

  constructor(private userservice: UserService, private auth: AuthService,private userListComp: UserListComponent) {

  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { UserService} from "../shared/user.service";
import { User } from "../shared/user.model";
import {ToastrService} from "ngx-toastr";
import {AngularFireAuth} from "angularfire2/auth";
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
  userList: User[];


  constructor(
                private userservice: UserService, private toastr: ToastrService,
                private fireauth: AngularFireAuth, private authService: AuthService,
                private route: Router
              )
  {

  }

  ngOnInit() {

    var x = this.userservice.getData();
    x.snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userList.push(y as User);
      });
    });
  }


  onEdit(usr : User){
    this.userservice.selectedUser = Object.assign({},usr);
  }

  onDelete(usr : User){
    this.userservice.deleteUser(usr.$key);
    this.toastr.warning("Delete Successfully");
  }

}

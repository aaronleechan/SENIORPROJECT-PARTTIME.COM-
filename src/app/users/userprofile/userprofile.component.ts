import { Component, OnInit } from '@angular/core';
import { UserService} from "../shared/user.service";
import {User} from "../shared/user.model"


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [UserService]
})
export class UserprofileComponent implements OnInit {
  userList: User[];

  constructor(private userservice: UserService) { }

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

}

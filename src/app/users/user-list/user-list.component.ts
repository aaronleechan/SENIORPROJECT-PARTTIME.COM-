import { Component, OnInit } from '@angular/core';
import { UserService} from "../shared/user.service";
import { User } from "../shared/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
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

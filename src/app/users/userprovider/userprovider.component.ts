import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user.model";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-userprovider',
  templateUrl: './userprovider.component.html',
  styleUrls: ['./userprovider.component.css'],
  providers: [UserService]
})
export class UserproviderComponent implements OnInit {
  userProvider: User[];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    var x = this.userservice.getData();
    x.snapshotChanges().subscribe(item => {
      this.userProvider = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userProvider.push(y as User);
      });
    });
  }

}

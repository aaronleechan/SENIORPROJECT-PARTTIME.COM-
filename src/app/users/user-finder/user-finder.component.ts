import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user.model";
import {UserService} from "../shared/user.service";
import {UserHirerComponent} from "../user-hirer/user-hirer.component";

@Component({
  selector: 'app-user-finder',
  templateUrl: './user-finder.component.html',
  styleUrls: ['./user-finder.component.css'],
  providers: [UserService]

})
export class UserFinderComponent implements OnInit {
  userFinder: User[];

  constructor(private userservice: UserService) { }

  ngOnInit() {

    var x = this.userservice.getData();
    x.snapshotChanges().subscribe(item => {
      this.userFinder = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userFinder.push(y as User);
      });
    });

  }

}




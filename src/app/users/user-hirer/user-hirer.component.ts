import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { UserListComponent} from '../user-list/user-list.component';


@Component({
  selector: 'app-user-hirer',
  templateUrl: './user-hirer.component.html',
  styleUrls: ['./user-hirer.component.css'],
  providers: [UserService]
})
export class UserHirerComponent implements OnInit {
  userHirer: User[];

  constructor(private userservice: UserService) {

  }

  ngOnInit() {

    var x = this.userservice.getData();
    x.snapshotChanges().subscribe(item => {
      this.userHirer = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userHirer.push(y as User);
      });
    });

  }






}

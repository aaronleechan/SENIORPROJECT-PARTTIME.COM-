import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-userreciver',
  templateUrl: './userreciver.component.html',
  styleUrls: ['./userreciver.component.css'],
  providers: [UserService]
})
export class UserreciverComponent implements OnInit {
  userReciver: User[];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    var x = this.userservice.getData();
    x.snapshotChanges().subscribe(item => {
      this.userReciver = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userReciver.push(y as User);
      });
    });
  }
}



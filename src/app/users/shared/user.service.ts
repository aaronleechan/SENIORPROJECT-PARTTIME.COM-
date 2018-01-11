import { Injectable } from '@angular/core';
import { User } from './user.model';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Credit} from "./credit";



@Injectable()
export class UserService {
  userList: AngularFireList<any>;
  selectedUser: User = new User();


  constructor(private firebase: AngularFireDatabase) {
  }


  getData(){
    this.userList = this.firebase.list('users');
    return this.userList;
  }

  insertUser(user: User){
    this.userList.push({

      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email

    });
  }

  updateUser(user: User){
    this.userList.update(user.$key,{
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    });
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }

}



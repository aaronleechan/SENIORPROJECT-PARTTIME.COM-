import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { User } from './user.model';
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

  insertUser(user : User){
    this.userList.push({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      hire: user.hire,
      find: user.find
    });
  }

  updateUser(user: User){
    this.userList.update(user.$key,{
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      hire: user.hire,
      find: user.find
    });
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }

}



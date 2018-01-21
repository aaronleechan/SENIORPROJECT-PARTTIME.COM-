import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AngularFirestoreModule} from "angularfire2/firestore";
import { User } from './user.model';
import {Credit} from "./credit";
import {AuthService} from "../../core/auth.service";
import { AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import 'rxjs/addoperator/switchMap';
import { Observable} from "rxjs/Observable";


@Injectable()
export class UserService {
  userList: AngularFireList<any>;
  selectedUser: User = new User();
  users: User[];


  constructor(private angularfiredatabase: AngularFireDatabase, private authservice: AuthService,
              private angularfirestore: AngularFirestoreModule,
              private angularfireauth: AngularFireAuth, private route: Router) {

  }

  getData(){
    this.userList = this.angularfiredatabase.list('users');
    return this.userList;
  }

  insertUser(user : User){
    this.userList.push({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      receiver: user.receiver,
      provider: user.provider
    });
  }

  updateUser(user: User){
    this.userList.update(user.$key,{
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      receiver: user.receiver,
      provider: user.provider
    });
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }




}





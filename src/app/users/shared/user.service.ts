import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { User } from './user.model';
import {Credit} from "./credit";
import {AuthService} from "../../core/auth.service";
import { AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";


@Injectable()
export class UserService {
  userList: AngularFireList<any>;
  selectedUser: User = new User();
  users: User[];



  constructor(private firebase: AngularFireDatabase, private auth: AuthService,
              private angularfireauth: AngularFireAuth, private route: Router) {

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


  checkGoogleUserLogIn(){
    if(this.auth.userCheckerLogIn){

      var x = this.getData();
      x.snapshotChanges().subscribe(item => {
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;


          console.log( " =========> " + y['email'] + " .. " + this.auth.currentuserEmail);
          if(y['email'] == this.auth.currentuserEmail){
            this.route.navigate(['/userProfile']);
          }


        });
      });

    }


  }



}





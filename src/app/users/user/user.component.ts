import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getData();
    this.resetForm();
  }

  onSubmit(userForm: NgForm){
    console.log(">>>>>>>>>>>>>>>>");
    console.log(userForm);
    this.userservice.insertUser(userForm.value);
    this.resetForm(userForm);
  }


  resetForm(userForm? : NgForm){
    if(userForm != null)
    userForm.reset();
    this.userservice.selectedUser={
      $key: null,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      credits: null,
      providingServices: '',
      serviceSeekers: '',
      serviceFee: 0
    }
  }
}

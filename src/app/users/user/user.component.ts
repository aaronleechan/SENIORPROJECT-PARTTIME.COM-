import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {NgForm} from "@angular/forms";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UserService, private tostr: ToastrService) { }

  ngOnInit() {
    this.userservice.getData();
    this.resetForm();
  }

  onSubmit(userForm: NgForm){
    this.userservice.insertUser(userForm.value);
    this.resetForm(userForm);
    this.tostr.success('Submitted Successfully');
  }


  resetForm(userForm? : NgForm){
    if(userForm != null)
    userForm.reset();
    this.userservice.selectedUser={
      $key: null,
      firstname: '',
      lastname: '',
      email: ''
    }
  }
}

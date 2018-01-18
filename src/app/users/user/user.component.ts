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

    this.resetForm();
  }

  onSubmit(userForm: NgForm){
    if(userForm.value.$key==null)
      this.userservice.insertUser(userForm.value);
    else{
      this.userservice.updateUser(userForm.value);
      this.tostr.success("Update Successfully");
    }

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
      email: '',
      receiver: false,
      provider: false
    }
  }
}

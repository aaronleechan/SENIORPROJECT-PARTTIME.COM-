//Main Page
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

//Boostrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';

//Environment
import { environment} from '../environments/environment';

//Angular Firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

//Install Component
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import {AuthService} from './core/auth.service';
import { UserloginComponent } from './users/userlogin/userlogin.component';
import { UserFinderComponent } from './users/user-finder/user-finder.component';
import { UserHirerComponent } from './users/user-hirer/user-hirer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    NavbarComponent,
    HomeComponent,
    UserloginComponent,
    UserFinderComponent,
    UserHirerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

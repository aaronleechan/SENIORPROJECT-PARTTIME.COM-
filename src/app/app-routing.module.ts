import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';
import { LoginComponent } from './login/login.component';
import {SearchPageComponent} from './search-page/search-page.component';
import { UserproviderComponent } from './users/userprovider/userprovider.component';
import { UserreciverComponent} from "./users/userreciver/userreciver.component";
import {UserprofileComponent} from "./users/userprofile/userprofile.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'userlist', component: UserListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'users', component: UsersComponent},
  { path: 'userlogin', component: UserloginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'searchpage', component: SearchPageComponent},
  { path: 'provider', component: UserproviderComponent},
  { path: 'receiver', component: UserreciverComponent},
  { path: 'userProfile', component: UserprofileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

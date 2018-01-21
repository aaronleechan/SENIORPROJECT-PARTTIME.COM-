import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import { AngularFirestoreModule} from "angularfire2/firestore";

@NgModule({
  imports:[
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService]
})
export class CoreModule{}

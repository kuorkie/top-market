import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {AuthComponent, LoginComponent} from "@top-market/auth";
import {AuthRoutingModule} from "./auth-routing.module";
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from "primeng/messages";
import {ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {AvatarModule} from "primeng/avatar";
import {SidebarModule} from "primeng/sidebar";



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    MessagesModule,
    AvatarModule,
    SidebarModule,


  ],
  providers: []

})
export class AuthModule { }

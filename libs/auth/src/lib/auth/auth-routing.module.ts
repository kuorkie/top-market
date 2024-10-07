import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "./auth-guard.service";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'

      },
      {
        path: 'login', component: LoginComponent,
        canActivate: [AuthGuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

import { Route,RouterModule} from '@angular/router';
import {loadRemoteModule} from "@nx/angular/mf";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {authGuard} from "../../../../libs/shared/src/lib/shared/services/auth.guard";
import {UsersComponent} from "./modules/administration/components/users/users.component";

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'admin'
  },
  {
    path: 'admin',
    loadChildren: () => import('@top-market/libs/auth').then(m=>m.AuthModule),
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./modules/administration/administration.module').then(m=>m.AdministrationModule),    canActivate:[authGuard]

  }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

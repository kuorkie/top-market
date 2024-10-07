import { Route,RouterModule} from '@angular/router';
import {loadRemoteModule} from "@nx/angular/mf";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'admin'
  },
  {
    path: 'admin',
    loadChildren: () => import('@top-market/libs/auth').then(m=>m.AuthModule)
  },
  {
    path: 'admin-dashboard',
    component:AppComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

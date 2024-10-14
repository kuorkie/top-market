import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {authGuard} from "./services/auth.guard";

export const routes: Route[] = [

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class SharedRoutingModule { }

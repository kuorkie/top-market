import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./components/users/users.component";
import {MenuSectionsComponent} from "./components/menu-sections/menu-sections.component";

const routes: Routes = [{
  path: "123",
  component: UsersComponent
},{
  path: "menu-sections",
  component: MenuSectionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }

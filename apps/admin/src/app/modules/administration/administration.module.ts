import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdministrationRoutingModule} from "./administration-routing.module";
import {UsersComponent} from "./components/users/users.component";
import {MenuSectionsComponent} from "./components/menu-sections/menu-sections.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    UsersComponent,
  MenuSectionsComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class AdministrationModule { }

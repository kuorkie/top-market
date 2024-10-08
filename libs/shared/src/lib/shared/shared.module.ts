import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from "primeng/sidebar";
import {SharedRoutingModule} from "./shared-routing.module";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    SidebarModule,
    SharedRoutingModule, RippleModule, StyleClassModule
  ]
})
export class SharedModule { }

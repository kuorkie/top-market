import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from "primeng/sidebar";
import {SharedRoutingModule} from "./shared-routing.module";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { HttpClientModule} from "@angular/common/http";



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
    SharedRoutingModule,
    RippleModule,
    StyleClassModule,
    HttpClientModule
  ]
})
export class SharedModule { }

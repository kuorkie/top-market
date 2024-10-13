import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routes";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "@top-market/libs/shared";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    AvatarModule,
    ButtonModule,
    SidebarModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
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
import {TableModule} from "primeng/table";



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
    TableModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {UserService} from "../../../../libs/shared/src/lib/shared/services/user.service";
import {PrimeNGConfig} from "primeng/api";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin';
  isSidebarCollapsed:boolean = true
  constructor(public userService:UserService) {

  }

  ngOnInit(){
    console.log(this.userService.isLoggedIn())
  }
  onSidebarToggle(event:boolean){
    this.isSidebarCollapsed = event;
    console.log(this.isSidebarCollapsed)
  }
}

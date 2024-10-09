import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedService} from "../shared.service";
import {UserService} from "../services/user.service";
@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private sharedService:SharedService, private userService: UserService){

  }

  allMenu:any[] = []
  sidebarVisible:boolean = true
  ngOnInit(){
    if(sessionStorage.getItem('data')){
      this.sidebarVisible = true
      this.getAllMenu()

    }
  }

  // getAllMenu(){
  //   this.sharedService.getAllMenu().subscribe((data:any)=>{
  //    this.allMenu = data
  //   })
  // }
  getAllMenu(){
    this.userService.menuListByAcc().subscribe((data:any)=>{
      console.log(data)
    })
  }
}

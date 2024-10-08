import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedService} from "../shared.service";

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private sharedService:SharedService){

  }

  allMenu:any[] = []
  sidebarVisible:boolean = true
  ngOnInit(){
    if(localStorage.getItem('hh')){
      this.sidebarVisible = true
    }
    this.getAllMenu()
  }

  getAllMenu(){
    this.sharedService.getAllMenu().subscribe((data:any)=>{
     this.allMenu = data
    })
  }
}

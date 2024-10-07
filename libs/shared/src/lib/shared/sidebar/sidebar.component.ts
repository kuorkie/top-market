import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarVisible:boolean = true
  ngOnInit(){
    if(localStorage.getItem('hh')){
      this.sidebarVisible = true
    }
  }
}

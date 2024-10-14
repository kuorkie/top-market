import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedService} from "../shared.service";
import {UserService} from "../services/user.service";
import {Sidebar} from "primeng/sidebar";
import {Router } from "@angular/router";
@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',

})
export class SidebarComponent {
  constructor(private sharedService: SharedService, private userService: UserService,private router:Router) {

  }
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  allMenu: any[] = []
  sidebarVisible: boolean = true
  private accountName: string = "";

  ngOnInit() {

    const storageData = localStorage.getItem('data');
    const storageDataJson = storageData !== null ? JSON.parse(storageData) : undefined;

    if (storageDataJson) {
      this.accountName = storageDataJson.userName
      this.sidebarVisible = true
      this.getAllMenu(this.accountName)
    }
  }

  closeCallback(e:any): void {
    this.sidebarRef.close(e)
  }

  navigate(url:string){
    this.router.navigate([`admin-home/${url}`])
  }

  openCallback():void{
    this.sidebarRef.show()
  }

  getAllMenu(accountName: string) {
    this.userService.menuListByAcc(accountName).subscribe((data: any) => {
        console.log(data);
        this.allMenu = data; // Assign the fetched data to allMenu
      },
      (error) => {
        console.error('Error fetching menu:', error); // Add error handling
      }
    );
  }
}

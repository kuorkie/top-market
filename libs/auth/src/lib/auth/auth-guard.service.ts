import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private router: Router) { }

  async canActivate() {

    const isUserAuthenticated = localStorage.getItem('data');
    if (isUserAuthenticated) {
      console.log('called if')
      this.router.navigate(['admin-home']);
      return false;
    } else {
      console.log('called else');
      return true;
    }
  }
}

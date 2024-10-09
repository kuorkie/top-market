import { Injectable, signal } from '@angular/core';
import {environment} from '../environment/environment'
import { HttpClient, HttpContext } from '@angular/common/http';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { WITH_AUTHORIZATION } from './http-intercepter.service';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient,private router:Router) {
  }
  public isLoggedIn = signal(this.checkLocalStorageData());
  private loginUrl = environment.loginUrl;
  private adminUrl = environment.adminUrl;
  // private userData
  // private auth
  // public isLoggedIn = signal(this.checkLocalStorageData());

  // setIsLoggedIn(isLoggedIn: boolean) {
  //   this.isLoggedIn.set(isLoggedIn);
  // }
  checkLocalStorageData() {
    if (localStorage.getItem('data')) {
      const storageData = localStorage.getItem('data');
      const storageDataJson = storageData !== null ? JSON.parse(storageData) : undefined;
      // if (storageDataJson) {
      //   const expDate = new Date(storageDataJson.expDate);
      //   if (expDate < new Date().getDay()) {
      //     localStorage.removeItem('mp-mf-data');
      //   } else {
      //
      //     return true;
      //   }
      // }
    }
    return false;
  }
  setHttpContex(isAuth: boolean) {
    return new HttpContext().set(WITH_AUTHORIZATION, isAuth);
  }

  login(body: any) {
    return this.http.post<any>(`${this.loginUrl}/login`, body, {context: this.setHttpContex(false)});
  }

  logout() {
    // this.isLoggedIn.set(false);
    localStorage.removeItem('mp-mf-data');
    this.router.navigate(['/login']);
  }

  menuListByAcc(){
    let auth
    return this.http.get(`${this.adminUrl}menu/by-account-name${auth}` );
  }
}

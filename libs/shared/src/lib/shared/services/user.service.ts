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
  private auth: string = "";

  checkLocalStorageData() {
    if (localStorage.getItem('data')) {
      const storageData = localStorage.getItem('data');
      const storageDataJson = storageData !== null ? JSON.parse(storageData) : undefined;
      if (storageDataJson) {
        this.auth = `?accountName=${storageDataJson.userName}`
        this.menuListByAcc();
        return true;

      }
    }
    return false;
  }
  setHttpContex(isAuth: boolean) {
    return new HttpContext().set(WITH_AUTHORIZATION, isAuth);
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn.set(isLoggedIn);
  }

  login(body: any) {
    return this.http.post<any>(`${this.loginUrl}/login`, body, {context: this.setHttpContex(false)});
  }

  logout() {
    this.isLoggedIn.set(false);
    localStorage.removeItem('data');
    this.router.navigate(['/admin/login']);
  }

  menuListByAcc(){
    return this.http.get(`${this.adminUrl}menu/by-account-name${this.auth}` );
  }
}

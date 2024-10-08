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

  private loginUrl = environment.loginUrl;

  // public isLoggedIn = signal(this.checkLocalStorageData());

  // setIsLoggedIn(isLoggedIn: boolean) {
  //   this.isLoggedIn.set(isLoggedIn);
  // }

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
}

import { Injectable } from '@angular/core';
import {environment} from './environment/environment'
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private adminUrl = environment.adminUrl;

  constructor(private http: HttpClient) {
  }

  getAllMenu = () => {
    return this.http.get(`${this.adminUrl}menu/all`)
  }
}

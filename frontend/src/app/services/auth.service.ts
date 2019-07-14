import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = `${environment.API_URL}/user/register`;
  private    _loginUrl = `${environment.API_URL}/user/login`;

  constructor(private http: HttpClient, public cookie:CookieService,public router:Router) { }

  registerUser(email,password) {
    return this.http.post<any>(this._registerUrl, {'email':email,'password':password});
  }

  loginUser(email, password) {
    return this.http.post<any>(this._loginUrl, {'email':email,'password':password});
  }

  loggedIn() {
    return !!this.cookie.get('token');   
  }

  getToken(){
    return this.cookie.get('token');
  }

  logout(){
    this.cookie.delete('token');
  }
}

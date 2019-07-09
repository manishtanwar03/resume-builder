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
  private _loginUrl = "http://localhost:9000/user/login";

  constructor(private http: HttpClient, public cookie:CookieService,public router:Router) { }

  registerUser(email,password) {
    return this.http.post<any>(this._registerUrl, {'email':email,'password':password});
  }

  loginUser(email, password) {
    return this.http.post<any>(this._loginUrl, {'email':email,'password':password});
  }


  loggedIn() {
    return !!localStorage.getItem('token');   
  }

  getToken(){
    return localStorage.getItem('token');
  }


  // createCookie(username,password){
  
  //   this.cookie.set('username',username.trim());
  //   this.cookie.set('password',password.trim());
  //   this.cookie.set('loggedIn','true');
  // }

  // logIn(username,password){
  //   let USERNAME:string = this.cookie.get('username');
  //   let PASSWORD:string = this.cookie.get('password');
  //   if(username.trim()==USERNAME && password.trim()==PASSWORD){
  //       this.cookie.set('loggedIn','true');
  //       return true;
  //   }
  //   return false;
  // }

  // logOut(){
  //   this.cookie.set('loggedIn','false');
  //   this.router.navigate(["/login"]);
  // }

  // isLoggedIn(){
    
  //   return !!this.cookie.get('token');
  // }

  // signUp(username,password){
  //   this.cookie.deleteAll();
  //   this.createCookie(username,password);
  //   return true;
  // }

  // getUsername(){
  //   return this.cookie.get('username');
  // }
}

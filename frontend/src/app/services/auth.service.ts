import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public cookie:CookieService,public router:Router) { }

  createCookie(username,password){
  
    this.cookie.set('username',username.trim());
    this.cookie.set('password',password.trim());
    this.cookie.set('loggedIn','true');
  }

  logIn(username,password){
    let USERNAME:string = this.cookie.get('username');
    let PASSWORD:string = this.cookie.get('password');
    if(username.trim()==USERNAME && password.trim()==PASSWORD){
        this.cookie.set('loggedIn','true');
        return true;
    }
    return false;
  }

  logOut(){
    this.cookie.set('loggedIn','false');
    this.router.navigate(["/login"]);
  }

  isLoggedIn(){
    if( this.cookie.get('loggedIn') == 'true')
        return true;
    return false;
  }

  signUp(username,password){
    this.cookie.deleteAll();
    this.createCookie(username,password);
    return true;
  }

  getUsername(){
    return this.cookie.get('username');
  }
}

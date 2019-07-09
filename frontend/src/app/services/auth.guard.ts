import { Injectable } from '@angular/core';
import {  CanActivate, Router  } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService:AuthService,public router:Router){}


  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false') 
      console.log(this.authService.loggedIn())           
      this.router.navigateByUrl('/login')
      return false
    }
  }
}
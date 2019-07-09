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
<<<<<<< HEAD
      console.log('false')            
      this.router.navigate(['/login'])
      return false
      // return true
=======
      console.log('false') 
      console.log(this.authService.loggedIn())           
      this.router.navigateByUrl('/login')
      return false
>>>>>>> 1e1636dc22c8c48ab20cdfc0967dd3cee4bfae14
    }
  }
}
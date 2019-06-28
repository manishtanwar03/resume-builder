import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor( public cookie:CookieService,public authService:AuthService,public router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username' : new FormControl(null,Validators.required),
      'password' : new FormControl(null,[Validators.required,Validators.min(6)])
    });
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(){
    if(this.authService.logIn(this.loginForm.value.username,this.loginForm.value.password)){
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Authentication failed !!!\nwrong Username or Password");
    }
  }
}

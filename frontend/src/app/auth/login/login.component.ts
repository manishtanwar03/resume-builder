import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(public location:Location, public cookie:CookieService,public authService:AuthService,public router:Router) { }

  
  ngOnInit() {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null,Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password' : new FormControl(null,[Validators.required,Validators.min(6)])
    });

    
    if(this.authService.loggedIn()){
      // this.router.navigate(['/dashboard']);
      this.location.back();
    }
  }

  onSubmit(){
    // if(this.authService.logIn(this.loginForm.value.email,this.loginForm.value.password)){
    //   this.router.navigate(['/dashboard']);
    // }
    // else{
    //   alert("Authentication failed !!!\nwrong Username or Password");
    // }   

    console.log(this.loginForm.value)

    this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe(
      res => {
        console.log(res)
       this.cookie.set('token', res.token);
       //localStorage.setItem('token', res.token)
       this.router.navigate(['/dashboard'])
     },
      err => console.log(err)
    )   
    
  }
}

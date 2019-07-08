
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators }  from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  signupForm:FormGroup;
  

  constructor( public location:Location, public authService:AuthService, public router:Router , public cookie: CookieService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email' : new FormControl(null,Validators.required),
      'password' : new FormControl("",[Validators.required,Validators.min(6)]),
      'confirm-password' : new FormControl(null,[Validators.required,Validators.min(6)])
    },


    {
      validators:this.matchingPasswords('password','confirm-password')
    }
    );


    if(this.authService.loggedIn()){
      // this.router.navigate(['/dashboard']);
      this.location.back();
    }
  }

// confirm password validator
matchingPasswords(passwordKey: string, confirmpasswordKey: string) {
  return (group: FormGroup): { [key: string]: any } => {
  let password = group.controls[passwordKey];
  let confirmpassword = group.controls[confirmpasswordKey];
  if (password.value !== confirmpassword.value) {
  return {
  mismatchedPasswords: true
  };
  }
}}


  onSubmit(){
    // if ( this.authService.signUp(this.signupForm.value.username,this.signupForm.value.password) )
    //     this.router.navigate(['/'])
 console.log(this.signupForm.value)
 this.authService.registerUser(this.signupForm.value.email,this.signupForm.value.password)
    .subscribe(
     

      res => {
         console.log(res)
         this.cookie.set('token', res.token);
       // localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    )      
  }


        
        
  }

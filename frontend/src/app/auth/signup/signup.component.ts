import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators }  from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  

  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null,Validators.required),
      'password' : new FormControl("",[Validators.required,Validators.min(6)]),
      'confirm-password' : new FormControl(null,[Validators.required,Validators.min(6)])
    },
    {
      validators:this.matchingPasswords('password','confirm-password')
    }
    );

    if (this.authService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
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
    if ( this.authService.signUp(this.signupForm.value.username,this.signupForm.value.password) )
        this.router.navigate(['/'])
  }
    
}



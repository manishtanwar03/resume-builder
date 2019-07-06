import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  basicInformationForm:FormGroup=null;

  constructor(private router:Router) { }


  // local storage methods
  private getBasicInfo()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('basicInformation'));
    return localStorageItem==null? [] : localStorageItem;
  }

  private setBasicInfo(data){
    localStorage.setItem('basicInformation',JSON.stringify(data));
  }

  ngOnInit() {
    this.basicInformationForm=new FormGroup({
      firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        street:new FormControl('',Validators.required),
        state:new FormControl('',Validators.required),
        city:new FormControl('',Validators.required),
        pincode:new FormControl('',Validators.required),
        phone:new FormControl('',[Validators.required,Validators.min(10)]),
        email:new FormControl('',Validators.required),
        index:new FormControl(0)
    });
    // loading previous values if any
   if(this.getBasicInfo().length>0)
        this.basicInformationForm.setValue(this.getBasicInfo())
  }

  saveData(){
    this.setBasicInfo(this.basicInformationForm.value);
    this.router.navigate(['/resume','work-history']);
  }
}

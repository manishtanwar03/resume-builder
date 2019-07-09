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
    return localStorageItem;
  }

  private setBasicInfo(data){
    localStorage.setItem('basicInformation',JSON.stringify(data));
  }
phonePattern="/^\d{10}$/";
  ngOnInit() {
    
    this.basicInformationForm=new FormGroup({
      firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        title:new FormControl('',Validators.required),
        pitch:new FormControl('',Validators.required),
        phone:new FormControl(''),
        email:new FormControl('',[Validators.required,Validators.email]),
    });
    // loading previous values if any
   if(this.getBasicInfo()){
        this.basicInformationForm.setValue(this.getBasicInfo());  
   }
  }

  saveData(){
    this.setBasicInfo(this.basicInformationForm.value);
    // this.router.navigate(['/resume','work-history']);
  }





}

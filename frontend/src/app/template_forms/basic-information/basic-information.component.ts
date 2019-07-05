import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
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
      firstName:new FormControl(''),
        lastName:new FormControl(''),
        street:new FormControl(''),
        state:new FormControl(''),
        city:new FormControl(''),
        pincode:new FormControl(''),
        phone:new FormControl(''),
        email:new FormControl(''),
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

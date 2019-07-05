import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {
basicInfoForm=new FormGroup({
  firstName:new FormControl(''),
    lastName:new FormControl(''),
    street:new FormControl(''),
    state:new FormControl(''),
    city:new FormControl(''),
    pincode:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl('')
});
  constructor() { }

  private getBasicInfo()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('basicInfoForm'));
    return localStorageItem==null? {}  :localStorageItem;
  }

  private setBasicInfo(){
    localStorage.setItem('basicInfoForm',JSON.stringify(this.basicInfoForm.value));
  }
  ngOnInit() {
  }

  focusOutFunction(){
    this.setBasicInfo();
  }

}

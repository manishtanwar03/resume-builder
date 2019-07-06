import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  basicInformationForm:FormGroup=null;

  constructor(private router:Router, private dataService:DataService) { }


  // local storage methods
  private getBasicInfo()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('basicInformation'));
    return localStorageItem;
  }

  private setBasicInfo(data){
    this.dataService.update('basicInformation',this.basicInformationForm.value);
    localStorage.setItem('basicInformation',JSON.stringify(data));
  }

  ngOnInit() {
    this.basicInformationForm=new FormGroup({
      firstName:new FormControl(''),
        lastName:new FormControl(''),
        title:new FormControl(''),
        pitch:new FormControl(''),
        phone:new FormControl(''),
        email:new FormControl(''),
    });
    // loading previous values if any
   if(this.getBasicInfo()){
        this.basicInformationForm.setValue(this.getBasicInfo());
        this.dataService.update('basicInformation',this.basicInformationForm.value);
   }
  }

  saveData(){
    this.setBasicInfo(this.basicInformationForm.value);
    // this.router.navigate(['/resume','work-history']);
  }
}

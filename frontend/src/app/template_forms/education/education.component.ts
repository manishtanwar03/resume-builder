import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

// import * as moment from 'moment'


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm = new FormGroup({
    schoolName:new FormControl(''),
    location:new FormControl(''),
    degree:new FormControl(''),
    year:new FormControl(''),
    description:new FormControl('')
  });


  year_list=[];
  constructor() { 
    for(let year=new Date().getFullYear();year!=1950;year--){
      this.year_list.push(year);
    }
  }
  private getEducation()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('educationForm'));
    return localStorageItem==null? {}  :localStorageItem;
  }

  private setEducation(){
    localStorage.setItem('educationForm',JSON.stringify(this.educationForm.value));
  }

  ngOnInit() {
    
    
  }
  focusOutFunction(){
    this.setEducation();
  }
}

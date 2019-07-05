import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

// import * as moment from 'moment'


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm:FormGroup;
  education=[];
  year_list=[];


  constructor() { 
    for(let year=new Date().getFullYear();year!=1950;year--){
      this.year_list.push(year);
    }
  }

  // local storage 
  private getEducation()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('education'));
    return localStorageItem==null? []  :localStorageItem;
  }

  private setEducation(){
    localStorage.setItem('education',JSON.stringify(this.education));
  }

  ngOnInit() {
    this.educationForm = new FormGroup({
      schoolName:new FormControl(''),
      location:new FormControl(''),
      degree:new FormControl(''),
      year:new FormControl(''),
      description:new FormControl(''),
      index:new FormControl(0)
    });
    // load existing data if any
    if(this.getEducation()!=[]){
      this.education = this.getEducation();
      // console.log(this.education);   
    } 
    this.educationForm.patchValue({'index':this.education.length});
    // console.log(this.education.length);
  }

  saveData(){
    this.education[this.educationForm.value.index] = this.educationForm.value;
    this.setEducation();
    this.educationForm.reset();
    this.educationForm.patchValue({'index':this.education.length});
  }
}

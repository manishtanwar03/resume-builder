import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm:FormGroup;
  education=[];
  year_list=[];
  isEdit=null;

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
    localStorage.clear()
    localStorage.setItem('education',JSON.stringify(this.education));
  }

  ngOnInit() {
    this.educationForm = new FormGroup({
      schoolName:new FormControl(''),
      location:new FormControl(''),
      degree:new FormControl(''),
      year:new FormControl(''),
      description:new FormControl(''),
    });
    
    // load existing data if any
    if(this.getEducation()!=[]){
      this.education = this.getEducation();
    } 
  }

  addData(){
    this.education.push(this.educationForm.value);
    this.setEducation();
    this.educationForm.reset();
  }

  saveData(){
    this.education[this.isEdit]=this.educationForm.value;
    this.isEdit=null;
    this.educationForm.reset();
    this.setEducation();
  }

  editMe(index){
    this.educationForm.setValue(this.education[index]);
    this.isEdit=index;
  }

  deleteMe(index){
    this.education.splice(index,1);
    this.setEducation();
  }

}

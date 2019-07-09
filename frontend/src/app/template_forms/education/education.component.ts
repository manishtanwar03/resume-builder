import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private service:DataService) { 
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
    // localStorage.clear()
    localStorage.setItem('education',JSON.stringify(this.education));
    this.service.update('education',this.education);
  }

  ngOnInit() {
    this.educationForm = new FormGroup({
      schoolName:new FormControl('',Validators.required),
      location:new FormControl('',Validators.required),
      degree:new FormControl('',Validators.required),
      year:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
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

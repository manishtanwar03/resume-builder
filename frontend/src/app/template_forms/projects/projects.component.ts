import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectForm:FormGroup;
  projects=[];

  constructor() { }


  // local storage
  private getProject()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('projects'));
    return localStorageItem==null? []  :localStorageItem;
  }

  private setEducation(){
    localStorage.setItem('projects',JSON.stringify(this.projects));
  }
  
  ngOnInit() {
    this.projectForm=new FormGroup({
      projectTitle:new FormControl(''),
      sDay:new FormControl(''),
      sMonth:new FormControl(''),
      sYear:new FormControl(''),
      eDay:new FormControl(''),
      eMonth:new FormControl(''),
      eYear:new FormControl(''),
      description:new FormControl('')
    });
  }
}

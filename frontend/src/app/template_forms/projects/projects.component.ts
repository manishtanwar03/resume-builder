import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectForm:FormGroup;
  projects=[];
  isEdit=null;

  constructor(private service:DataService) { }


  // local storage
  private getProject()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('projects'));
    return localStorageItem==null? []  :localStorageItem;
  }

  private setProject(){
    localStorage.setItem('projects',JSON.stringify(this.projects));
    this.service.update('projects',this.projects);
  }
  
  ngOnInit() {
    this.projectForm=new FormGroup({
      projectTitle:new FormControl('',Validators.required),
      start_day:new FormControl('',Validators.required),
      start_month:new FormControl('',Validators.required),
      start_year:new FormControl('',Validators.required),
      end_day:new FormControl('',Validators.required),
      end_month:new FormControl('',Validators.required),
      end_year:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      index:new FormControl(''),
    });
    // load existing data if any
    if(this.getProject()!=[]){
      this.projects = this.getProject();
    } 
    // this.projectForm.patchValue({'index':this.projects.length});
  }

  // saveData(){
  //   this.projects[this.projectForm.value.index] = this.projectForm.value;
  //   this.setProject();
  //   this.projectForm.reset();
  //   this.projectForm.patchValue({'index':this.projects.length});
  // }

  addData(){
    this.projects.push(this.projectForm.value);
    this.setProject();
    this.projectForm.reset();
  }

  saveData(){
    this.projects[this.isEdit]=this.projectForm.value;
    this.isEdit=null;
    this.projectForm.reset();
    this.setProject();
  }

  editMe(index){
    this.projectForm.setValue(this.projects[index]);
    this.isEdit=index;
  }

  deleteMe(index){
    this.projects.splice(index,1);
    this.setProject();
  }
 
}

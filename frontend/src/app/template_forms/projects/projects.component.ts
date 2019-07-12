import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectForm:FormGroup;
  projects=[];
  isEdit=null;
  flag:boolean=false;
  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService) { }

  async ngOnInit() {
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
    //fetching default values if any
    let data = await this.dataService.getData(this.flag,'projects');
    if(data!=null && data['length']>0){
        for(let key in data){
          this.projects.push(data[key]);
        }
    }
  } 

  async update(){
    await this.dataService.update(this.flag,'projects',this.projects);
  }

  addData(){
    if(!!this.isEdit){
      this.projects[this.isEdit-1] = this.projectForm.value;
      this.isEdit=null;
    }
    else{
      this.projects.push(this.projectForm.value);
    }
    this.update();
    this.projectForm.reset();
  }

  editMe(index){
    this.isEdit = index;
    this.projectForm.setValue(this.projects[index-1]);
  }

  deleteMe(index){
    this.projects.splice(index,1);
this.update();
  }
  
  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'skills':next]);
  }
}

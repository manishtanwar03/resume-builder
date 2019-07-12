import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  flag:boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService) { 
    for(let year=new Date().getFullYear();year!=1950;year--){
      this.year_list.push(year);
    }
  }

  async ngOnInit() {
    this.educationForm = new FormGroup({
      schoolName:new FormControl('',Validators.required),
      location:new FormControl('',Validators.required),
      degree:new FormControl('',Validators.required),
      year:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
    });
    //fetching default values if any
    let data = await this.dataService.getData(this.flag,'education');
    if(data!=null && data['length']>0){
        for(let key in data){
          this.education.push(data[key]);
        }
    }
  }
  
  async update(){
    await this.dataService.update(this.flag,'education',this.education);
  }

  addData(){
    if(!!this.isEdit){
      this.education[this.isEdit-1] = this.educationForm.value;
      this.isEdit=null;
    }
    else{
      this.education.push(this.educationForm.value);
    }
    this.update();
    this.educationForm.reset();
  }

  editMe(index){
    this.isEdit = index;
    this.educationForm.setValue(this.education[index-1]);
  }

  deleteMe(index){
    this.education.splice(index,1);
    this.update();
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'interests':next]);
  }

}

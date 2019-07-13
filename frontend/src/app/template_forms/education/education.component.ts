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

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService) { 
    for(let year=new Date().getFullYear();year!=1950;year--){
      this.year_list.push(year);
    }
  }

 ngOnInit() {
    this.educationForm = new FormGroup({
      schoolName:new FormControl('',Validators.required),
      location:new FormControl('',Validators.required),
      degree:new FormControl('',Validators.required),
      year:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
    });
    //fetching previous data
    this.dataService.get().subscribe(
      (res)=>{
        this.education=[];
        for(let value of res['education'])
          this.education.push(value);
      }
    );
  }
  

  addData(){
    if(!!this.isEdit){
      this.education[this.isEdit-1] = this.educationForm.value;
      this.isEdit=null;
    }
    else{
      this.education.push(this.educationForm.value);
    }
    this.educationForm.reset();
    this.dataService.set({'education':this.education});
  }

  editMe(index){
    this.isEdit = index;
    this.educationForm.setValue(this.education[index-1]);
  }

  deleteMe(index){
    this.education.splice(index,1);
    this.dataService.set({'education':this.education});
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'interests':next]);
  }

}

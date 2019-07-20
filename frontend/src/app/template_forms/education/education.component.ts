import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { RemoteStorageService } from 'src/app/services/remote-storage.services';

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

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService,private remoteService:RemoteService,private remoteStorage:RemoteStorageService) { 
    for(let year=new Date().getFullYear();year!=1950;year--){
      this.year_list.push(year);
    }
      // setting flag
  if(this.route.snapshot.queryParams.next!=undefined){
    this.flag=true;
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
    this.dataService.get(this.flag).subscribe(
      (res)=>{
        this.education=[];
        for(let value of res['education'])
            this.education.push(value);
      },
      (err)=>{
        console.log("EducationComponent ",err);
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
    this.dataService.set({'education':this.education},this.flag);
  }

  editMe(index){
    this.isEdit = index;
    this.educationForm.setValue(this.education[index-1]);
  }

  deleteMe(index){
    this.education.splice(index,1);
    this.dataService.set({'education':this.education},this.flag);
  }

  nextRoute(){
    if(this.flag){
      let resumeId = this.route.snapshot.queryParams.next;
      let resumeData = this.remoteStorage.get();
      try{
      this.remoteService.updateResume(resumeId,resumeData);
      this.router.navigate(['/resume',resumeId]);
      }
      catch(err){
        window.alert(err);
      }
    }
    else{
    this.router.navigate(['/resume','projects']);
    }
  }
}

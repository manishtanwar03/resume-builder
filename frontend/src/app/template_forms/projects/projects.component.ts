import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { RemoteStorageService } from 'src/app/services/remote-storage.services';
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

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService,private remoteService:RemoteService,private remoteStorage:RemoteStorageService) {
    if(this.route.snapshot.queryParams.next!=undefined){
      this.flag=true;
    }
   }

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
    });
    // fetching previous data
    this.dataService.get(this.flag).subscribe(
      (res)=>{
        this.projects=[];
        for(let value of res['projects'])
          this.projects.push(value);
      }
    );
  } 

  addData(){
    if(!!this.isEdit){
      this.projects[this.isEdit-1] = this.projectForm.value;
      this.isEdit=null;
    }
    else{
      this.projects.push(this.projectForm.value);
    }
    this.projectForm.reset();
    console.log(this.projects);
    this.dataService.set({'projects':this.projects},this.flag);
  }

  editMe(index){
    this.isEdit = index;
    delete this.projects[index-1]['_id'];
    this.projectForm.setValue(this.projects[index-1]);
  }

  deleteMe(index){
    this.projects.splice(index,1);
    this.dataService.set({'projects':this.projects},this.flag);
  }
  
  reorder(obj){
    if((obj.index==0 && obj.move==-1) || (obj.index==this.projects.length && obj.move==1)){
      ;
    }
    else{
      let tempData = this.projects[obj.index];
      this.projects.splice(obj.index,1);
      if(obj.move==-1){
        this.projects.splice(obj.index-1,0,tempData);
      }
      else{
        this.projects.splice(obj.index+1,0,tempData);
      }
    }
    this.dataService.set({'projects':this.projects},this.flag);
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
    this.router.navigate(['/resume','skills']);
    }
  }
}

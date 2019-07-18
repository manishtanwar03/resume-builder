import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { RemoteStorageService } from 'src/app/services/remote-storage.services';
@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  
  workHistoryForm:FormGroup;
  workHistory=[];
  isEdit=null;
  flag:boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService,private remoteService:RemoteService,private remoteStorage:RemoteStorageService) { 
    if(this.route.snapshot.queryParams.next!=undefined){
      this.flag=true;
    }
  }

ngOnInit() {
    this.workHistoryForm=new FormGroup({
      job_title:new FormControl('',Validators.required),
      employer:new FormControl('',Validators.required),
        start_day:new FormControl('',Validators.required),
        start_month:new FormControl('',Validators.required),
        start_year:new FormControl('',Validators.required),
        end_day:new FormControl('',Validators.required),
        end_month:new FormControl('',Validators.required),
        end_year:new FormControl('',Validators.required),
        description:new FormControl('',Validators.required),
    });
    //fetching previous data
    this.dataService.get(this.flag).subscribe(
      (res)=>{
        this.workHistory=[];
        for(let value of res['workHistory'])
            this.workHistory.push(value);
      },
      (err)=>{
        console.log("EducationComponent ",err);
      }
    );
  }

  addData(){
    if(!!this.isEdit){
      this.workHistory[ this.isEdit -1 ] = this.workHistoryForm.value;
      this.isEdit=null;
    }
    else{
      this.workHistory.push(this.workHistoryForm.value);
    }
    this.workHistoryForm.reset();
    this.dataService.set({'workHistory':this.workHistory},this.flag);
  }

  editMe(index){
    this.isEdit = index;
    delete this.workHistory[index-1].present;
    delete this.workHistory[index-1]._id;
    this.workHistoryForm.setValue(this.workHistory[index-1]);
  }

  deleteMe(index){
    this.workHistory.splice(index,1);
    this.dataService.set({'workHistory':this.workHistory},this.flag);
  }

  nextRoute(){
    let resumeId = this.route.snapshot.queryParams.next;
    if(this.flag){
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
    this.router.navigate(['/resume','education']);
    }
  }
  

}

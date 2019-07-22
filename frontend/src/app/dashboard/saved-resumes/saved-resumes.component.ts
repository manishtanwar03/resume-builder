import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import * as moment from 'moment'

@Component({
  selector: 'app-saved-resumes',
  templateUrl: './saved-resumes.component.html',
  styleUrls: ['./saved-resumes.component.css']
})
export class SavedResumesComponent implements OnInit {
  resumes =null;
  loading=0;
  constructor(private remoteService:RemoteService) { 
  }
  async ngOnInit() {
    try{
      let data = await this.remoteService.loadAllResume();
      if(data)
      this.resumes=data.map((resume)=>{
        resume['loading']=true;
        resume['modified_on']=moment(resume['modified_on']).fromNow();
        return resume;
      });
    }
    catch(err){
      console.log(err);
    }
  } 

  async deleteMe(resumeId,index){
    if(window.confirm("Do you really want to delete this resume?")){
      try{
        let response = await this.remoteService.deleteResume(resumeId)
        this.resumes.splice(index,1);
        console.log("resume deleted"+response);
      }
      catch(err){
        window.alert("Something went wrong, try again!")
      }
    }
  }
  loadingStatus(index){
    console.log(index);
    this.resumes[index]['loading']=false;
  }
}

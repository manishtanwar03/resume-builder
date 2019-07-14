import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-saved-resumes',
  templateUrl: './saved-resumes.component.html',
  styleUrls: ['./saved-resumes.component.css']
})
export class SavedResumesComponent implements OnInit {
  resumes =null;
  constructor(private remoteService:RemoteService) { }

  async ngOnInit() {
    try{
      let data = await this.remoteService.loadAllResume();
      if(data)
        this.resumes=data;
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
}

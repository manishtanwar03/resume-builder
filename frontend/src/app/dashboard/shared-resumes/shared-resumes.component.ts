import { Component, OnInit } from '@angular/core';
import { ShareResumeService } from 'src/app/services/share-resume.service';

@Component({
  selector: 'app-shared-resumes',
  templateUrl: './shared-resumes.component.html',
  styleUrls: ['./shared-resumes.component.css']
})
export class SharedResumesComponent implements OnInit {
  resumes =null;
  loading=0;
  constructor(private shareService:ShareResumeService) { }

 async ngOnInit() {
   try{
    //  let loadingObj = {'loading'}
     let data = await this.shareService.fetchSharedResumes();
     console.log(data);
     if(data){
      this.resumes = data.map((resume:{})=>{
        resume["loading"] = true;
        return resume;
      });
      console.log(this.resumes);
     }
  }
  catch(error){
    console.log(error);
  }
 }

 loadingStatus(index){
   this.resumes[index]['loading']=false;
}
}

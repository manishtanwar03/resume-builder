import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { RemoteStorageService } from 'src/app/services/remote-storage.services';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  public interests=[];
  flag:boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService,private remoteService:RemoteService,private remoteStorage:RemoteStorageService) {
    if(this.route.snapshot.queryParams.next!=undefined){
      this.flag=true;
    }
  }
   
  ngOnInit() {
      //fetching previous data
    this.dataService.get(this.flag).subscribe(
      (res)=>{
        this.interests=[];
        for(let value of res['interests'])
          this.interests.push(value);
      }
    );
  }


  onEnter(interest){
    interest = interest.trim().toLowerCase();
    if(interest && !this.interests.includes(interest)){
      this.interests.push(interest);
    }
    this.dataService.set({'interests':this.interests},this.flag);
  }

  removeMe(id){
    this.interests.splice(id,1);
    this.dataService.set({'interests':this.interests},this.flag);
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
      this.dataService.get().subscribe(
        (resumeData)=>this.remoteService.saveResume(resumeData),
        (err)=>window.alert("something went wrong, try again")
      );
    }
  }
}

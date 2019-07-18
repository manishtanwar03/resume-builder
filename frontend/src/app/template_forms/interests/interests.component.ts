import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { RemoteStorageService } from 'src/app/services/remote-storage.services';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit,OnDestroy {
  public interests=[];
  flag:boolean=false;
  subs1:Subscription;
  subs2:Subscription;
  mySub;
  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService,private remoteService:RemoteService,private remoteStorage:RemoteStorageService) {
    if(this.route.snapshot.queryParams.next!=undefined){
      this.flag=true;
    }
    console.log("interesCOnst")
  }
   
  ngOnInit() {
    //fetching previous data
    console.log("InterOuter");

    this.subs1= this.dataService.get(this.flag).subscribe(
      (res)=>{
        console.log("InterInnner");
        this.interests=[];
        for(let value of res['interests'])
            this.interests.push(value);
      },
      (err)=>{
        console.log("InterestsComponent ",err);
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

  async nextRoute(){
    if(this.flag){
      let resumeId = this.route.snapshot.queryParams.next;
      let resumeData = this.remoteStorage.get();
      try{
      await this.remoteService.updateResume(resumeId,resumeData);
      this.router.navigate(['/resume',resumeId]);
      }
      catch(err){
        window.alert(err);
      }
    }
    else{
         this.subs2= this.dataService.get(this.flag).subscribe(
            async (res)=>{
              try{
                let response = await this.remoteService.saveResume(res);
                localStorage.clear();
                this.router.navigate(['/resume',response['resume']]);
              }
              catch(err){
                console.log("Interests ",err);
              }
            }
          );
    }
  }
  ngOnDestroy(){
    // console.log("destroy called");
    this.subs1.unsubscribe()
    this.subs2.unsubscribe()
  }
}

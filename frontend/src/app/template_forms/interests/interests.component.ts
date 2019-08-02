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
  templates:boolean=true;
  subs1:Subscription;
  subs2:Subscription;


  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService,private remoteService:RemoteService,private remoteStorage:RemoteStorageService) {
    if(this.route.snapshot.queryParams.next!=undefined){
      this.flag=true;
    }
    else if(this.route.snapshot.queryParams['my_content']){
      this.templates=false;
    }
  }
   
  ngOnInit() {
    //fetching previous data
    this.subs1= this.dataService.get(this.flag,!this.templates).subscribe(
      (res)=>{
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
    this.dataService.set({'interests':this.interests},this.flag,!this.templates);
  }

  removeMe(id){
    this.interests.splice(id,1);
    this.dataService.set({'interests':this.interests},this.flag,!this.templates);
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
         this.subs2= this.dataService.get(this.flag,!this.templates).subscribe(
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
        this.subs2.unsubscribe();
    }
  }
  ngOnDestroy(){
    // console.log("destroy called");
    this.subs1.unsubscribe()
  }
}

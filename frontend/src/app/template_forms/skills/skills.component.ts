import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { RemoteStorageService } from 'src/app/services/remote-storage.services';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills=[];
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
        this.skills=[];
        for(let value of res['skills'])
            this.skills.push(value);
      },
      (err)=>{
        console.log("SkillsComponent ",err);
      }
    );
  }


  onEnter(skill){
    skill = skill.trim().toLowerCase();
    if(skill && !this.skills.includes(skill)){
      this.skills.push(skill);
    }
    this.dataService.set({'skills':this.skills},this.flag);
  }

  removeMe(id){
    this.skills.splice(id,1);
    this.dataService.set({'skills':this.skills},this.flag);
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
    this.router.navigate(['/resume','languages']);
    }
  }
}

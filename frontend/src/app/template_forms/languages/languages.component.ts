import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { RemoteStorageService } from 'src/app/services/remote-storage.services';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  public languages=[];
  flag:boolean=false;
  templates:boolean=true;

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
      this.dataService.get(this.flag,!this.templates).subscribe(
        (res)=>{
          this.languages=[];
          for(let value of res['languages'])
              this.languages.push(value);
        },
        (err)=>{
          console.log("LanguagesComponent ",err);
        }
      );
  }

  onEnter(language){
    language = language.trim().toLowerCase();
    if(language && !this.languages.find((entry)=>entry.language==language)){
      this.languages.push({'language':language,'value':100});
    }
    this.dataService.set({'languages':this.languages},this.flag,!this.templates);
  }

  removeMe(id){
    this.languages.splice(id,1);
    this.dataService.set({'languages':this.languages},this.flag,!this.templates);
  }

  setProficiency(id,value){
    this.languages[id].value=value;
    this.dataService.set({'languages':this.languages},this.flag,!this.templates);
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
    else if(!this.templates){
      this.router.navigate(['/resume','interests'],{queryParams:{'my_content':true}});
    }
    else{
    this.router.navigate(['/resume','interests']);
    }
  }

}

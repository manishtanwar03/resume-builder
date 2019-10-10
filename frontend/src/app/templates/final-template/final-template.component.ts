import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RemoteService } from 'src/app/services/remote.service';
import { DataService } from 'src/app/services/data.service';
import { MzModalService } from 'ngx-materialize';
import { SharedDetailsComponent } from './../shared-details/shared-details.component';
import { ShareResumeService } from 'src/app/services/share-resume.service';

@Component({
  selector: 'app-final-template',
  templateUrl: './final-template.component.html',
  styleUrls: ['./final-template.component.css']
})
export class FinalTemplateComponent implements OnInit {
  resume={};
  template='functional';
  loadingStatus:boolean=false;
  font=null;
  view:boolean=false;
  constructor(private route:ActivatedRoute,private router:Router,private remoteService:RemoteService,
    private dataService:DataService,private modalService: MzModalService,private shareResumeService:ShareResumeService) { 
  }

  async ngOnInit() {
    if(this.route.snapshot.queryParams['shared']){
        this.view=true;
        this.resume = await this.shareResumeService.loadShared(this.route.snapshot.params.id);
    }
    else{
      this.resume = await this.remoteService.loadOneResume(this.route.snapshot.params.id)
    }
    this.template = this.resume['template'];
    this.dataService.set(this.resume,true);
    setTimeout(()=>this.loadingStatus=true,1200);
  }

  goTo(path){
    this.router.navigate(['/resume',path],{queryParams:{next:this.route.snapshot.params.id}});
  }

  updateFilter(filter){
    this.resume['filter']=filter;
  }

  setFont(font){
    this.resume['font']=font;
  }

  async saveChanges(){
    //save changes
    try{
      console.log(this.resume['_id'],this.resume['font']);
      let result = await this.remoteService.updateResume(this.resume['_id'],this.resume);
    }
    catch(err){
      console.log("Error Occurred",err);
      this.router.navigate(['/resume',this.resume['_id']]);
    }
  }

  shareResume(){
    this.shareResumeService.setId(this.resume['_id']);
    this.modalService.open(SharedDetailsComponent);
  } 
}

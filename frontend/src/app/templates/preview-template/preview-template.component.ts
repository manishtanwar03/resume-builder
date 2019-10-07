import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-preview-template',
  templateUrl: './preview-template.component.html',
  styleUrls: ['./preview-template.component.css']
})
export class PreviewTemplateComponent implements OnInit {
  @Input() resumeId=null;
  @Input() flag=false;
  @Input() template='functional';
  @Input() location;
  @Output() loadingStatus = new EventEmitter<boolean>();
  resume = {};
  
  constructor(private dataService:DataService,private remoteService:RemoteService) { 
  }

  async ngOnInit() {;
    if(this.resumeId){
      this.resume = await this.remoteService.loadOneResume(this.resumeId);
      this.template=this.resume['template'];
      setTimeout(()=>this.loadingStatus.emit(true),800);
    }
    else if(this.resumeId && this.location=='shared'){
      
    }
    else{
      this.dataService.get(this.flag).subscribe(
          (res)=>{
            this.resume = res;
            if(this.location=='preview')
              this.template = this.resume['template'];
          },
          (err)=>{
            console.log("PreviewTemplate ",err)
          }
      );
    }
  }

}

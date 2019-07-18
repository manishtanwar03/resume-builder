import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { ActivatedRoute } from '@angular/router';

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
  resume = {};
  constructor(private dataService:DataService,private remoteService:RemoteService,private route:ActivatedRoute) { 
  }

  async ngOnInit() {;
    if(this.resumeId){
      this.resume = await this.remoteService.loadOneResume(this.resumeId);
      this.template=this.resume['template'];
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

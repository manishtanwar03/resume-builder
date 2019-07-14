import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-preview-template',
  templateUrl: './preview-template.component.html',
  styleUrls: ['./preview-template.component.css']
})
export class PreviewTemplateComponent implements OnInit {
  @Input() resumeId=null;
  resume = {};

  constructor(private dataService:DataService,private remoteService:RemoteService) { 
   
  }

  async ngOnInit() {
    if(this.resumeId){
      this.resume = await this.remoteService.loadOneResume(this.resumeId);
    }
    else{
      this.dataService.get().subscribe(
        (res)=>this.resume=res,
        (error)=>console.log("Error in Preview",error)
      );
    }
  }
}

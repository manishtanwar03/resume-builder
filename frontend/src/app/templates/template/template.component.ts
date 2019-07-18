import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() flag=false;
  template='functional';

  resume = {};

  constructor(private dataService:DataService) { }

 async ngOnInit() {
  this.dataService.get(this.flag).subscribe(
    (res)=>{
      this.resume = res;
      this.template=this.resume['template'];
    },
    (err)=>{
      console.log("PreviewTemplate ",err)
    });
  }
}

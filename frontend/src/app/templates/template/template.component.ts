import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() flag=false;

  resume = {};

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.get(this.flag).subscribe(
      (res)=>this.resume=res,
      (error)=>console.log("Error in Template",error)
    );
  }
}

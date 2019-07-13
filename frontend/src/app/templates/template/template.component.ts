import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  resume = {};

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.get().subscribe(
      (res)=>this.resume=res,
      (error)=>console.log("Error in Template",error)
    );
  }
}

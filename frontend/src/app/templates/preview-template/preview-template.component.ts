import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-preview-template',
  templateUrl: './preview-template.component.html',
  styleUrls: ['./preview-template.component.css']
})
export class PreviewTemplateComponent implements OnInit {

  resume = {};

  constructor(private dataService:DataService) { 
    this.dataService.get().subscribe(
      (res)=>this.resume=res,
      (error)=>console.log("Error in Preview",error)
    );
  }

  ngOnInit() {
  }
}

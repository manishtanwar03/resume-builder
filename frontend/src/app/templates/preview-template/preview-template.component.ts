import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-preview-template',
  templateUrl: './preview-template.component.html',
  styleUrls: ['./preview-template.component.css']
})
export class PreviewTemplateComponent implements OnInit {
  @Input() filter:String="#479099";

  basicInformation=null;
  skills=null;
  languages=null;
  interests=[];

  constructor() { }

  ngOnInit() {
  
  }
ngDoCheck(){
  this.basicInformation = JSON.parse(localStorage.getItem('basicInformation'));
  this.skills = JSON.parse(localStorage.getItem('skills'));
  this.languages = JSON.parse(localStorage.getItem('languages'));
  this.interests = JSON.parse(localStorage.getItem('interests'));
  console.log(this.interests)
}
}

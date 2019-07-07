import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { JsonPipe } from '@angular/common';

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
  interests=null;
  workHistory=null;
  projects=null;
  education=null;

  constructor() { }

  ngOnInit() {

  }
  ngDoCheck(){
  this.basicInformation = JSON.parse(localStorage.getItem('basicInformation'));
  this.skills = JSON.parse(localStorage.getItem('skills'));
  this.languages = JSON.parse(localStorage.getItem('languages'));
  this.interests = JSON.parse(localStorage.getItem('interests'));
  this.filter = JSON.parse(localStorage.getItem('filter'));
  this.workHistory = JSON.parse(localStorage.getItem('workHistory'));
  this.projects = JSON.parse(localStorage.getItem('projects'));
  this.education = JSON.parse(localStorage.getItem('education'));
  }

}

import { Component, OnInit } from '@angular/core';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  basicInformation=null;
  skills=null;
  languages=null;
  interests=null;
  workHistory=null;
  projects=null;
  education=null;
  filter:String="#479099";


  constructor(private exportAsService: ExportAsService) { }
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'resume', // the id of html/table element
  }
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


public capture(){
  this.exportAsService.save(this.exportAsConfig, 'My File Name');
}
}

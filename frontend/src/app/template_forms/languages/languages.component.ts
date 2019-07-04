import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  public languages=[];
  constructor() { }

  ngOnInit() {
  }

  onEnter(language){
    language = language.trim()
    if(language){
      this.languages.push(language);
    }
  }

  removeMe(id){
    this.languages.splice(id,1);
  }


}

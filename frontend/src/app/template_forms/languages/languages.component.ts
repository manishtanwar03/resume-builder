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
    language = language.trim().toLowerCase();
    if(language && !this.languages.find((entry)=>entry.language==language)){
      this.languages.push({'language':language,'value':100});
    }
  }

  removeMe(id){
    this.languages.splice(id,1);
  }

  setProficiency(id,value){
    this.languages[id].value = Number(value);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  public languages=[];
  constructor(private service:DataService) { }

  private getLanguages()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('languages'));
    return localStorageItem==null? []  :localStorageItem;
  }

  private setLocalStorageLanguages(){
    localStorage.setItem('languages',JSON.stringify(this.languages));
    this.service.update('languages',this.languages);
  }

  ngOnInit() {
    this.languages = this.getLanguages();
  }

  onEnter(language){
    language = language.trim().toLowerCase();
    if(language && !this.languages.find((entry)=>entry.language==language)){
      this.languages.push({'language':language,'value':100});
      this.setLocalStorageLanguages();
    }
  }

  removeMe(id){
    this.languages.splice(id,1);
    this.setLocalStorageLanguages();
  }

  setProficiency(id,value){
    this.languages[id].value = Number(value);
    this.setLocalStorageLanguages();
  }
}

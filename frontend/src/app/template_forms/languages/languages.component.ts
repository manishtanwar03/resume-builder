import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  public languages=[];
  flag:boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService) { }

  async ngOnInit() {
    //fetching default values if any
    let data = await this.dataService.getData(this.flag,'languages');
    if(data!=null && data['length']>0){
        for(let key in data){
          this.languages.push(data[key]);
        }
    }
  }

  async update(){
    await this.dataService.update(this.flag,'languages',this.languages);
  }

  onEnter(language){
    language = language.trim().toLowerCase();
    if(language && !this.languages.find((entry)=>entry.language==language)){
      this.languages.push({'language':language,'value':100});
    }
    this.update();
  }

  removeMe(id){
    this.languages.splice(id,1);
    this.update();
  }

  setProficiency(id,value){
    this.languages[id].value = Number(value);
    this.update();
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'interests':next]);
  }

}

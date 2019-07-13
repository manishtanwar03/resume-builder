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

   ngOnInit() {
      //fetching previous data
    this.dataService.get().subscribe(
      (res)=>{
        this.languages=[];
        for(let value of res['languages'])
          this.languages.push(value);
      }
    );
  }

  onEnter(language){
    language = language.trim().toLowerCase();
    if(language && !this.languages.find((entry)=>entry.language==language)){
      this.languages.push({'language':language,'value':100});
    }
    this.dataService.set({'languages':this.languages});
  }

  removeMe(id){
    this.languages.splice(id,1);
    this.dataService.set({'languages':this.languages});
  }

  setProficiency(id,value){
    this.languages[id].value=value;
    this.dataService.set({'languages':this.languages});
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'interests':next]);
  }

}

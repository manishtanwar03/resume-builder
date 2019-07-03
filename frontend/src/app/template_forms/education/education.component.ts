import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment'


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  year_list=[];
  constructor() { 
    for(let year=new Date().getFullYear();year!=1950;year--){
      this.year_list.push(year);
    }
  }

  ngOnInit() {
    
  }

}

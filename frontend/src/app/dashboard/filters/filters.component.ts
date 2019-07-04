import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  activeFilter = "#fff";
  filters_list = ['#fff','#576d7b','rgb(188,169,126)','#1a409a','#0187de','#39c3b1','#d0021b','#fe7a66','rgb(233,165,7)'];

  constructor() { }

  ngOnInit() {

  }

  setActive(filter){
    this.activeFilter=filter;
  }
}

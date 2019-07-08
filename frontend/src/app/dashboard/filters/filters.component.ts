import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filterValue = new EventEmitter<string>();

  activeFilter = "#fff";
  filters_list = ['#fff','#576d7b','rgb(188,169,126)','#1a409a','#0187de','#39c3b1','#d0021b','#fe7a66','rgb(233,165,7)'];

  constructor() { }

  ngOnInit() {
    this.activeFilter=JSON.parse(localStorage.getItem('filter'));
  }

  setActive(filter){
    this.activeFilter=filter;
    localStorage.setItem('filter',JSON.stringify(this.activeFilter));
    if(filter=='#fff'){
      localStorage.setItem('filter',JSON.stringify("#479099"));
      this.filterValue.emit("#479099");
    }
    else
      this.filterValue.emit(filter);
  }
}

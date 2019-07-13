import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  activeFilter = 0;
  filters_list = [
    {'heading':'#334458','subheading':'#2B343F','title':'#4f90cd'},
    {'heading':'#479099','subheading':'#3E787C','title':'#384458'},
    {'heading':'#374458','subheading':'#2B343F','title':'#F04R41'},
    {'heading':'#7D203F','subheading':'#631A36','title':'#C7A163'},
    {'heading':'#6F329A','subheading':'#3C3326','title':'#DB318A'},
    {'heading':'#F04C4D','subheading':'#F04C40','title':'#666766'},
    {'heading':'#193042','subheading':'#001729','title':'#697084'},
    {'heading':'#458966','subheading':'#125633','title':'#E5C749'},
    {'heading':'#ED4F47','subheading':'#A10300','title':'#193042'},
  ];
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  setActive(index){
    this.activeFilter=index;
    // this.dataService.update(false,'filter',this.filters_list[index]);
  }
}

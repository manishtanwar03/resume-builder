import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();
  @Output() font = new EventEmitter<any>();
  @Input() active=null;
  @Input() currentFont='asap';
  flag=false;
  activeFilter = 0;

  filters_list = [
    {'index':1,'heading':'#334458','subheading':'#2B343F','title':'#4f90cd'},
    {'index':2,'heading':'#479099','subheading':'#3E787C','title':'#384458'},
    {'index':3,'heading':'#374458','subheading':'#2B343F','title':'#F04R41'},
    {'index':4,'heading':'#7D203F','subheading':'#631A36','title':'#C7A163'},
    {'index':5,'heading':'#6F329A','subheading':'#3C3326','title':'#DB318A'},
    {'index':6,'heading':'#F04C4D','subheading':'#F04C40','title':'#666766'},
    {'index':7,'heading':'#193042','subheading':'#001729','title':'#697084'},
    {'index':8,'heading':'#458966','subheading':'#125633','title':'#E5C749'},
    {'index':9,'heading':'#ED4F47','subheading':'#A10300','title':'#193042'},
  ];
  
  font_list = ['default','asap','montserrat','heebo','barlow','catamaran','open_sans','roboto'];

  constructor(private dataService:DataService,private route:ActivatedRoute) {
    this.flag = !(this.route.snapshot.url[0]['path']=='dashboard')
   }

  ngOnInit() {
    console.log(this.route.snapshot.url[0]['path']);
    this.setActive(this.activeFilter);
    if(this.active){
      this.setActive(this.active-1);
    }
  }

  setActive(index){
    this.activeFilter=index;
    this.filter.emit(this.filters_list[index]);
    this.dataService.set({'filter':this.filters_list[index]},this.flag);
  }

  setFont(data){
    this.font.emit(data);
    this.dataService.set({'font':data},this.flag);
  }
}

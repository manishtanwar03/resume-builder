import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-slider',
  templateUrl: './data-slider.component.html',
  styleUrls: ['./data-slider.component.css']
})
export class DataSliderComponent implements OnInit {
  @Input() storedData=[];
  currentItem = 0;

  constructor() { }

  ngOnInit() {
  }

  next(){
    if(this.currentItem + 1 <= this.storedData.length - 1){
      this.currentItem++;
    }
  }

  back(){
    if(this.currentItem - 1 >= 0){
      this.currentItem--;
    }
  }
}

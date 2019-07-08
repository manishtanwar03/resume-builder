import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-slider',
  templateUrl: './data-slider.component.html',
  styleUrls: ['./data-slider.component.css']
})
export class DataSliderComponent implements OnInit {
  @Output() editMe = new EventEmitter<Number>();
  @Output() deleteMe = new EventEmitter<Number>();
  @Input() storedData=[];
  @Input() isEdit:Boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onEdit(index){
    this.isEdit=true;
    this.editMe.emit(index);
  }
  onDelete(index){
    this.deleteMe.emit(index);
  }

}

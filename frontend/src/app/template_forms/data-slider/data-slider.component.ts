import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-slider',
  templateUrl: './data-slider.component.html',
  styleUrls: ['./data-slider.component.css']
})
export class DataSliderComponent implements OnInit {
  @Output() editMe = new EventEmitter<Number>();
  @Output() deleteMe = new EventEmitter<Number>();
  @Output() move = new EventEmitter<Object>();
  @Input() data=[];
  @Input() isEdit:Boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onEdit(index){
    console.log(index);
    this.editMe.emit(index+1);
  }
  onDelete(index){
    this.deleteMe.emit(index);
  }

  moveUp(index){
    this.move.emit({
      'index':index,
      'move':-1
    });
  }
  moveDown(index){
    this.move.emit({
      'index':index,
      'move':1
    })
  }
}

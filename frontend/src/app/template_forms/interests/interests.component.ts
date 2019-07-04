import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  public interests=[];
  constructor() { }

  ngOnInit() {
  }

  onEnter(interest){
    interest = interest.trim()
    if(interest){
      this.interests.push(interest);
    }
  }

  removeMe(id){
    this.interests.splice(id,1);
  }

}

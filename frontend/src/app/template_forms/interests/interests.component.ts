import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  public interests=[];
  constructor(private service:DataService) { }

  private getInterests(){
    let localStorageItem=JSON.parse(localStorage.getItem('interests'));
    return localStorageItem==null?[]:localStorageItem;
  }

  private setInterests(){
    localStorage.setItem('interests',JSON.stringify(this.interests));
    this.service.update('interests',this.interests);
  }

  ngOnInit() {
    this.interests=this.getInterests();
  }

  onEnter(interest){
    interest = interest.trim().toLowerCase();
    if(interest && !this.interests.includes(interest)){
      this.interests.push(interest);
      this.setInterests();
    }
  }

  removeMe(id){
    this.interests.splice(id,1);
    this.setInterests();
  }

  saveData1(){
    this.service.saveData();
  }

}

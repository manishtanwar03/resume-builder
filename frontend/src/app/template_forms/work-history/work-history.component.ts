import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  workHistoryForm:FormGroup;
  workHistory=[];
  isEdit=null;

  constructor() { }

  private getWork()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('workHistory'));
    return localStorageItem==null? []  :localStorageItem;
  }

  private setWork(){
    localStorage.setItem('workHistory',JSON.stringify(this.workHistory));
  }

  ngOnInit() {
    this.workHistoryForm=new FormGroup({
      job_title:new FormControl(''),
      employer:new FormControl(''),
        start_day:new FormControl(''),
        start_month:new FormControl(''),
        start_year:new FormControl(''),
        end_day:new FormControl(''),
        end_month:new FormControl(''),
        end_year:new FormControl(''),
        description:new FormControl(''),
    });
    // load existing data if any
    if(this.getWork()!=[]){
      this.workHistory = this.getWork();
      // console.log(this.workHistory);
    }
  }

  // saveData(){
  //   this.workHistory[this.workHistoryForm.value.index] = this.workHistoryForm.value;
  //   this.setWork();
  //   this.workHistoryForm.reset();
  //   this.workHistoryForm.patchValue({'index':this.workHistory.length});
  // }

  addData(){
    this.workHistory.push(this.workHistoryForm.value);
    this.setWork();
    this.workHistoryForm.reset();
  }

  saveData(){
    this.workHistory[this.isEdit]=this.workHistoryForm.value;
    this.isEdit=null;
    this.workHistoryForm.reset();
    this.setWork();
  }

  editMe(index){
    this.workHistoryForm.setValue(this.workHistory[index]);
    this.isEdit=index;
  }

  deleteMe(index){
    this.workHistory.splice(index,1);
    this.setWork();
  }
}

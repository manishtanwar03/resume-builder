import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
workForm=new FormGroup({
  job_title:new FormControl(''),
  employer:new FormControl(''),
    sday:new FormControl(''),
    smonth:new FormControl(''),
    syear:new FormControl(''),
    eday:new FormControl(''),
    emonth:new FormControl(''),
    eyear:new FormControl(''),
    description:new FormControl('')
});
  constructor() { }

  private getWork()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('workForm'));
    return localStorageItem==null? {}  :localStorageItem;
  }

  private setWork(){
    localStorage.setItem('workForm',JSON.stringify(this.workForm.value));
  }

  ngOnInit() {
  }

  focusOutFunction(){
    this.setWork();
  }

}

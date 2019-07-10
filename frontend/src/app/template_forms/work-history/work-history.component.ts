import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  workHistoryForm:FormGroup;
  workHistory=[];
  isEdit=null;

  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { }

  private getWork()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('workHistory'));
    return localStorageItem==null? []  :localStorageItem;
  }

  private setWork(){
    localStorage.setItem('workHistory',JSON.stringify(this.workHistory));
    this.service.update('workHistory',this.workHistory);
  }

  ngOnInit() {
    this.workHistoryForm=new FormGroup({
      job_title:new FormControl('',Validators.required),
      employer:new FormControl('',Validators.required),
        start_day:new FormControl('',Validators.required),
        start_month:new FormControl('',Validators.required),
        start_year:new FormControl('',Validators.required),
        end_day:new FormControl('',Validators.required),
        end_month:new FormControl('',Validators.required),
        end_year:new FormControl('',Validators.required),
        description:new FormControl('',Validators.required),
        index:new FormControl('')
    });
    // load existing data if any
    if(this.getWork()!=[]){
      this.workHistory = this.getWork();
      // console.log(this.workHistory);
    }
  }

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
  
  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'education':next]);
  }
  

}

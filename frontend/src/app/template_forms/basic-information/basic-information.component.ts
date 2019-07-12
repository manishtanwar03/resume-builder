import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  basicInformationForm:FormGroup=null;
  flag:boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService) { }

async ngOnInit() {
    
    this.basicInformationForm=new FormGroup({
      firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        title:new FormControl('',Validators.required),
        pitch:new FormControl('',Validators.required),
        phone:new FormControl(''),
        email:new FormControl('',[Validators.required,Validators.email]),
    });
    //fetching default values if any
    this.basicInformationForm.patchValue(await this.dataService.getData(this.flag,'basicInformation'));
  } 

async update(){
  // console.log(this.basicInformationForm.value.firstName)
  await this.dataService.update(this.flag,'basicInformation',this.basicInformationForm.value);
}

nextRoute(){
  let next = this.route.snapshot.queryParams.next;
  this.router.navigate(['/resume',next==undefined?'work-history':next]);
}

}

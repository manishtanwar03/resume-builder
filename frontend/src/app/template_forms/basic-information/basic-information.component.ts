import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  basicInformationForm:FormGroup=null;
  
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
    this.basicInformationForm=new FormGroup({
      firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        title:new FormControl('',Validators.required),
        pitch:new FormControl('',Validators.required),
        phone:new FormControl(''),
        email:new FormControl('',[Validators.required,Validators.email]),
    });
  }

nextRoute(){
  let next = this.route.snapshot.queryParams.next;
  this.router.navigate(['/resume',next==undefined?'work-history':next]);
}


}

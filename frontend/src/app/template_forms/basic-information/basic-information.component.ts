import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RemoteService } from 'src/app/services/remote.service';
import { RemoteStorageService } from 'src/app/services/remote-storage.services';



@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  basicInformationForm:FormGroup=null;
  flag:boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService,private remoteService:RemoteService,private remoteStorage:RemoteStorageService) {
      if(this.route.snapshot.queryParams.next!=undefined){
        this.flag=true;
      }
   }

ngOnInit() {
    
    this.basicInformationForm=new FormGroup({
      firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        title:new FormControl('',Validators.required),
        pitch:new FormControl('',Validators.required),
        phone:new FormControl(''),
        email:new FormControl('',[Validators.required,Validators.email]),
    });
    this.dataService.get(this.flag).subscribe(
      (res)=>this.basicInformationForm.patchValue(res['basicInformation']),
      (error)=>console.log("Error in basicInformationComponent",error)
    );
  } 

update(){
  this.dataService.set({'basicInformation':this.basicInformationForm.value},this.flag);
} 

nextRoute(){
  if(this.flag){
    let resumeId = this.route.snapshot.queryParams.next;
    let resumeData = this.remoteStorage.get();
    console.log(resumeData);
    try{
    this.remoteService.updateResume(resumeId,resumeData);
    this.router.navigate(['/resume',resumeId]);
    }
    catch(err){
      window.alert(err);
    }
  }
  else{
  this.router.navigate(['/resume','work-history']);
  }
}

}

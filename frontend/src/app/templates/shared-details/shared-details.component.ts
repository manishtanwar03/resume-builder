import { Component, OnInit } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ngx-materialize';
import { ShareResumeService } from 'src/app/services/share-resume.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-details',
  templateUrl: './shared-details.component.html',
  styleUrls: ['./shared-details.component.css']
})
export class SharedDetailsComponent extends MzBaseModal{
  resumeId=null;
  shareForm : FormGroup;
  constructor(private shareResumeService:ShareResumeService ) { 
    super();
    this.resumeId = this.shareResumeService.getId();
  }

  ngOnInit() {
    this.shareForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required,Validators.email])
    });
  }
  addPerson(){
    // console.log("click");
    console.log(this.shareForm.value);
    let data ={
      resume:this.resumeId,
      person : this.shareForm.value.email
    };
    this.shareResumeService.shareWithPerson(data).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );
  }
}

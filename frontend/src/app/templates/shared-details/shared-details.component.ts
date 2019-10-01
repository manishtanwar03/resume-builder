import { Component, OnInit } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ngx-materialize';
import { ShareResumeService } from 'src/app/services/share-resume.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-details',
  templateUrl: './shared-details.component.html',
  styleUrls: ['./shared-details.component.css']
})
export class SharedDetailsComponent extends MzBaseModal {
  resumeId = null;
  shareForm: FormGroup;
  people = null;
  loadingStatus = true;
  constructor(private shareResumeService: ShareResumeService) {
    super();
    this.resumeId = this.shareResumeService.getId();
  }

  ngOnInit() {
    this.shareResumeService.getPeopleData(this.resumeId).subscribe(
      (res) => {
        this.people = res;
        this.loadingStatus = false;
      },
      (error) => console.log(error)
    );
    this.shareForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }
  addPerson() {
    let data = {
      resume: this.resumeId,
      person: this.shareForm.value.email
    };
    this.shareResumeService.shareWithPerson(data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.shareForm.reset();
  }
  removeMe(person,index){
    this.people.splice(index,1);
    this.shareResumeService.removePerson({'resume':this.resumeId,'person_id':person['_id']}).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    resumeData={
        'basicInformation':null,
        'education':null,
        'workHistory':null,
        'projects':null,
        'skills':null,
        'interests':null,
        'languages':null,
        'filter':null
    };

  constructor() { }

  update(key,value){
      this.resumeData[key]=value;
  }

  get(key){
      return this.resumeData[key];
  }

  getAll(){
      return this.resumeData;
  }
  
}

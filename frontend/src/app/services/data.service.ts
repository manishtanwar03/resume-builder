import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../environments/environment'
import * as Rx from "rxjs";
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService  implements OnInit{
  private    _resumeUrl = `${environment.API_URL}/resume`;

  localData={
    'basicInformation':{},
    'education':[],
    'workHistory':[],
    'projects':[],
    'skills':[],
    'interests':[],
    'languages':[],
    'filter':''
};
id=null;
remoteData={
  'basicInformation': {'firstName':'hp','lastName':'dasd'},
  'education':null,
  'workHistory':null,
  'projects':null,
  'skills':null,
  'interests':null,
  'languages':null,
  'filter':null
};

  local = new Rx.BehaviorSubject(this.localData);
  remote = new Rx.BehaviorSubject(this.remoteData);

  constructor(private http: HttpClient,private localStorage:LocalStorageService) { }

  ngOnInit(){
    //initalizing data
    this.local.next(this.localStorage.get(this.localData));
  }


getData(flag=false,key='all'){
    // key is the invidual data to be returned, if not given whole object is to be returned
    let data={};
    if(flag){
      this.remote.subscribe(
        (res) => key=='all'?data=res:data=res[key],
        (err) => console.log('something went wrong',err));
    }
    else{
    this.local.subscribe(
      (res) => key=='all'?data=res:data=res[key],
      (err) => console.log('something went wrongq'));
    }
    return data;
  } 

  update(flag,key='all',data){
    console.log(flag)
    // key is the invidual data to be updated, if not given whole object is to be updated
    if(flag){
      key=='all'?this.remoteData=data:this.remoteData[key]=data;
      this.remote.next(this.remoteData);
    }
    else{
      if(key=='all'){
        this.localData=data;
        this.localStorage.set(this.localData);
      }
      else{
        this.localData[key]=data;
        this.localStorage.set(this.localData,key);
      }
      this.local.next(this.localData);
    }
  }



}

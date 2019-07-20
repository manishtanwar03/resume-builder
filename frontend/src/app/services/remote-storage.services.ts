import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RemoteStorageService{
  
  Data={
    'basicInformation':{},
    'education':[],
    'workHistory':[],
    'projects':[],
    'skills':[],
    'interests':[],
    'languages':[],
    'filter':{'heading':'#334458','subheading':'#2B343F','title':'#4f90cd'},
    'template':'functional'
};

constructor() { 
  for(let [key,value] of Object.entries(this.Data)){
    if(localStorage.getItem('remote_'+key)==undefined){
      localStorage.setItem('remote_'+key,JSON.stringify(this.Data[key]));
    }
  }
}

set(data){
  for(let [key,value] of Object.entries(data)){
    localStorage.setItem('remote_'+key,JSON.stringify(data[key]));
  }
}

get(){
  let data={};
  let temp;
  for(let [key,value] of Object.entries(this.Data)){
    temp = JSON.parse(localStorage.getItem('remote_'+key));
    data[key]=temp==undefined?this.Data[key]:temp;
  }
  return data;
}

getOne(KEY){
  let temp  = JSON.parse(localStorage.getItem('remote_'+KEY));
  return temp==undefined?this.Data[KEY]:temp;
}
}

import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{
  
  Data={
    'basicInformation':{},
    'education':[],
    'workHistory':[],
    'projects':[],
    'skills':[],
    'interests':[],
    'languages':[],
    'filter':{'heading':'#334458','subheading':'#2B343F','title':'#4f90cd'}
};

constructor() { 
  for(let [key,value] of Object.entries(this.Data)){
    if(localStorage.getItem('local_'+key)==undefined){
      localStorage.setItem('local_'+key,JSON.stringify(this.Data[key]));
    }
  }
}

set(data){
  for(let [key,value] of Object.entries(data)){
    localStorage.setItem('local_'+key,JSON.stringify(data[key]));
  }
}

get(){
  let data={};
  let temp;
  for(let [key,value] of Object.entries(this.Data)){
    temp = JSON.parse(localStorage.getItem('local_'+key));
    data[key]=temp==undefined?this.Data[key]:temp;
  }
  return data;
}

getOne(KEY){
  let temp  = JSON.parse(localStorage.getItem('local_'+KEY));
  return temp==undefined?this.Data[KEY]:temp;
}

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyContentService {

  Data={
    'basicInformation':{},
    'education':[],
    'workHistory':[],
    'projects':[],
    'skills':[],
    'interests':[],
    'languages':[],
};

  constructor() { 
    for(let [key,value] of Object.entries(this.Data)){
      if(localStorage.getItem('store_'+key)==undefined){
        localStorage.setItem('store_'+key,JSON.stringify(this.Data[key]));
      }
    }
  }

  set(data){
    console.log(data)
    for(let [key,value] of Object.entries(data)){
      localStorage.setItem('store_'+key,JSON.stringify(data[key]));
    }
  }
  
  get(){
    let data={};
    let temp;
    for(let [key,value] of Object.entries(this.Data)){
      temp = JSON.parse(localStorage.getItem('store_'+key));
      data[key]=temp==undefined?this.Data[key]:temp;
    }
    return data;
  }
  
  getOne(KEY){
    let temp  = JSON.parse(localStorage.getItem('store_'+KEY));
    return temp==undefined?this.Data[KEY]:temp;
  }

  clear(){
    for(let [key,value] of Object.entries(this.Data)){
      localStorage.removeItem(key);
    }
  }
  
}

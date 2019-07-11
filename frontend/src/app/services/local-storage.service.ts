import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{
  constructor() { }

  set(data,type='all'){
    if(type=='all'){
        for(let [key,value] of Object.entries(data)){
            localStorage.setItem('local_'+key,JSON.stringify(data[key]));
        }
    }
    else{
        // else type is the key and data is the value to be updated
        localStorage.setItem('local_'+type,JSON.stringify(data));
    }
  }

  get(data,type='all'){
    if(type=='all'){
        let localData={};
        for( let [key,value] of Object.entries(data)){
            localData[key] = JSON.parse(localStorage.getItem('local_'+key));
        }
        return localData;
    }
    else{
        // else type is the key
        return JSON.parse(localStorage.getItem('local_'+type));
    }
  }

}

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
    'filter':''
};

constructor() { 
  for(let [key,value] of Object.entries(this.Data)){
    if(localStorage.getItem('local_'+key)==undefined){
      localStorage.setItem('local_'+key,JSON.stringify(this.Data[key]));
    }
}
}

  set(data,type='all'){
    if(type=='all'){
        for(let [key,value] of Object.entries(this.Data)){
            localStorage.setItem('local_'+key,JSON.stringify(data[key]));
        }
    }
    else{
        // else type is the key and data is the value to be updated
        localStorage.setItem('local_'+type,JSON.stringify(data));
    }
  }

  get(type='all'){
    if(type=='all'){
        let localData={};
        for( let [key,value] of Object.entries(this.Data)){
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

import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../environments/environment'
import * as Rx from "rxjs";
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService{

DataSubject = new Rx.BehaviorSubject([]);
localDataSubject = new Rx.BehaviorSubject(this.localStorage.get());

constructor(private localStorage:LocalStorageService) {
}

get(flag=false){
  if(flag)
    return ;
  return this.localDataSubject;
}

set(data,flag=false){
  if(flag){
    return ;
  }
  else{
    console.log(data)
    this.localStorage.set(data);
    this.localDataSubject.next(this.localStorage.get());
  }
}

}

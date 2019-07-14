import { Injectable} from '@angular/core';
import * as Rx from "rxjs";
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService{

localDataSubject = new Rx.BehaviorSubject(this.localStorage.get());
// remoteDataSubject = new Rx.BehaviorSubject()

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

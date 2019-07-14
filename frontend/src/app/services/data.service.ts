import { Injectable} from '@angular/core';
import * as Rx from "rxjs";
import { LocalStorageService } from './local-storage.service';
import { RemoteStorageService } from './remote-storage.services'

@Injectable({
  providedIn: 'root'
})
export class DataService{

localDataSubject = new Rx.BehaviorSubject(this.localStorage.get());
remoteDataSubject = new Rx.BehaviorSubject(this.remoteStorage.get());

constructor(private localStorage:LocalStorageService,private remoteStorage:RemoteStorageService) {
}

get(flag=false){
  if(flag)
    return this.remoteDataSubject;
  return this.localDataSubject;
}

set(data,flag=false){
  if(flag){
    this.remoteStorage.set(data);
    this.remoteDataSubject.next(this.remoteStorage.get());
  }
  else{
    this.localStorage.set(data);
    this.localDataSubject.next(this.localStorage.get());
  }
}

}

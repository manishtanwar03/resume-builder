import { Injectable} from '@angular/core';
import * as Rx from "rxjs";
import { LocalStorageService } from './local-storage.service';
import { RemoteStorageService } from './remote-storage.services'
import { MyContentService } from './my-content.service';

@Injectable({
  providedIn: 'root'
})
export class DataService{

localDataSubject = new Rx.BehaviorSubject(this.localStorage.get());
remoteDataSubject = new Rx.BehaviorSubject(this.remoteStorage.get());
myContentSubject = new Rx.BehaviorSubject(this.myContentService.get());

constructor(private localStorage:LocalStorageService,private remoteStorage:RemoteStorageService,private myContentService:MyContentService) {
}

get(flag=false,myContent=false){
  if(flag)
    return this.remoteDataSubject;
  else if(myContent){
    return this.myContentSubject;
  }
  else{
    return this.localDataSubject;
  }
}


set(data,flag=false,myContent=false){
  if(flag){
    this.remoteStorage.set(data);
    this.remoteDataSubject.next(this.remoteStorage.get());
  }
  else{
    if(myContent){
      this.myContentService.set(data);
      this.myContentSubject.next(this.myContentService.get());
    }
    else{
      this.localStorage.set(data);
      this.localDataSubject.next(this.localStorage.get());
    }
  }
}

}

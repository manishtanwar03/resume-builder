import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareResumeService {
  private _shareURL = `${environment.API_URL}/shared/`;

  resumeId = null;
  people=null;
  constructor(private http:HttpClient) { }

  setId(id){
    this.resumeId=id;
  }  
  getId(){
    return this.resumeId;
  }

  //fetch data
  shareWithPerson(data){
   return  this.http.post(this._shareURL+'share-resume',data);
  }
}

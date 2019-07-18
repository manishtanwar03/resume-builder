import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

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


  private    _resumeUrl = `${environment.API_URL}/resume/`;

  constructor(private http: HttpClient,private router:Router) { }

saveResume(resumeData){
  return this.http.post<any>(this._resumeUrl,resumeData).toPromise();
}
 loadOneResume(id){
  return this.http.get<any>(this._resumeUrl+id).toPromise();
 }

loadAllResume(){
  return this.http.get<any>(this._resumeUrl).toPromise();
  }

updateResume(id,data){
  this.http.put<any>(this._resumeUrl+id,data).toPromise();
}

deleteResume(id){
  this.http.delete<any>(this._resumeUrl+id).toPromise()
}
}







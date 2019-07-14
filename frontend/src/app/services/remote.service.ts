import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private service:DataService,private http: HttpClient,private router:Router) { }

  saveResume(resumeData)
  { 
    //to send resumeDetails to backend
    this.http.post<any>(this._resumeUrl,resumeData).subscribe(
      res=>{
        this.router.navigate(['/resume',res['resume']]);
      },
      err=>{
        this.router.navigate(['/resume']);
        window.alert("something went wrong ");
        console.log(err);
      }
    );
 }

 loadOneResume(id){
  return this.http.get<any>(this._resumeUrl+id).toPromise();
 }

loadAllResume(){
  return this.http.get<any>(this._resumeUrl).toPromise();
  }

updateResume(id,data){
  this.http.put<any>(this._resumeUrl+id,data).subscribe(
    (res)=>console.log("Resume updated"),
    (err)=>window.alert(err)
  );
}

deleteResume(id){
  this.http.delete<any>(this._resumeUrl+id).subscribe(
    (res)=>window.alert(res),
    (err)=>console.log(err)
  );
}
}







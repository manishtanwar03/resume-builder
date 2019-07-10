import { Injectable } from '@angular/core';
import { Details } from './resume.model';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private    _resumeUrl = `${environment.API_URL}/resume`;
  
    detail:Details;
    resumeData={
        'basicInformation':null,
        'education':null,
        'workHistory':null,
        'projects':null,
        'skills':null,
        'interests':null,
        'languages':null,
        'filter':null
    };
    
   


  constructor(private http: HttpClient) { }

  update(key,value){
      this.resumeData[key]=value;
  }


  get(key){
      return this.resumeData[key];
  }

  getAll(){
      return this.resumeData;
  }

  saveData()
  {
    this.detail=new Details(this.resumeData.interests,this.resumeData.languages,this.resumeData.skills,
    this.resumeData.education,this.resumeData.projects,this.resumeData.workHistory,this.resumeData.basicInformation);

    this.http.post<any>(this._resumeUrl,this.resumeData).subscribe(
      res=>{
        return (res);
      },
      err=>console.log(err)
    );
  }
  
}

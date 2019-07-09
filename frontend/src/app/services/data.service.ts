import { Injectable } from '@angular/core';
import { Details } from './resume.model';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {
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

    private _resumeUrl = "http://localhost:9000/resume";
  constructor(private http: HttpClient) { }

  update(key,value){
      this.resumeData[key]=value;
      this.detail=new Details(this.resumeData.interests,this.resumeData.languages,this.resumeData.skills,
        this.resumeData.education,this.resumeData.projects,this.resumeData.workHistory,this.resumeData.basicInformation);
  }


  get(key){
      return this.resumeData[key];
  }

  getAll(){
      return this.resumeData;
  }

  saveData()
  {
    this.http.post<any>(this._resumeUrl,this.detail).subscribe(
      res=>{
        console.log(res);
        return(res);
      },
      err=>console.log(err)
);
  }
  
}

import { Injectable } from '@angular/core';
import { Details } from './resume.model';
import { HttpClient } from '@angular/common/http'
import { environment } from './../../environments/environment'

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
    
    private    _resumeUrl = `${environment.API_URL}/resume`;
    // private _resumeUrl = "http://localhost:9000/resume";
  constructor(private http: HttpClient) { }

  update(key,value){
      this.resumeData[key]=value;
    //  console.log(this.resumeData[key]);
  }


  get(key){
      return this.resumeData[key];
  }

  getAll(){
      return this.resumeData;
  }

  saveData()
  {
    console.log("555");
    console.log(this.resumeData);
    this.detail=new Details(this.resumeData.interests,this.resumeData.languages,this.resumeData.skills,
    this.resumeData.education,this.resumeData.projects,this.resumeData.workHistory,this.resumeData.basicInformation);
//     console.log(this.detail);
//     this.http.post<any>(this._resumeUrl,this.detail).subscribe(
//       res=>{
//         console.log(res);
//         return(res);
//       },
//       err=>console.log(err)
// );

    this.http.post<any>(this._resumeUrl,this.resumeData).subscribe(
      res=>{
        console.log(res);
        return (res);
      },
      err=>console.log(err)

    );
  }
  
}

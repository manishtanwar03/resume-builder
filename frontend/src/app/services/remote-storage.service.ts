import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteStorageService {

  
  private    _resumeUrl = `${environment.API_URL}/resume/`;
  // private    _resumeUrl = `${environment.API_URL}/resume/`;

  constructor(private service:DataService,private http: HttpClient) { }

  saveData()//to send resumeDetails to backend
  {
    this.http.post<any>(this._resumeUrl,this.service.localData).subscribe(
      res=>{
        console.log(res);
        return (res);
      },
      err=>console.log(err)
    );
    
    this.http.get<any>(this._resumeUrl+this.service.id).subscribe(
      res=>{
        return (res);
      },
      err=>console.log(err)
    );



    }


  }







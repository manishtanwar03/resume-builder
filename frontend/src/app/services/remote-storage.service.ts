import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RemoteStorageService {

  
  private    _resumeUrl = `${environment.API_URL}/resume/`;
  // private    _resumeUrl = `${environment.API_URL}/resume/`;

  constructor(private service:DataService,private http: HttpClient,private router:Router) { }

  saveData()//to send resumeDetails to backend
  {
    this.http.post<any>(this._resumeUrl,this.service.getData()).subscribe(
      res=>{
        this.router.navigate(['/resume',res['resume']]);
      },
      err=>console.log(err)
    );
 }

 getData(id){
  return this.http.get<any>(this._resumeUrl+id);
 }


  }







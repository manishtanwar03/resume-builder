import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoteStorageService } from '../../services/remote-storage.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  public interests=[];
  flag:boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService,private service :RemoteStorageService) { }
   
  ngOnInit() {
      //fetching previous data
    this.dataService.get().subscribe(
      (res)=>{
        this.interests=[];
        for(let value of res['interests'])
          this.interests.push(value);
      }
    );
  }


  onEnter(interest){
    interest = interest.trim().toLowerCase();
    if(interest && !this.interests.includes(interest)){
      this.interests.push(interest);
    }
    this.dataService.set({'interests':this.interests});
  }

  removeMe(id){
    this.interests.splice(id,1);
    this.dataService.set({'interests':this.interests});
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'final':next]);
  }
}

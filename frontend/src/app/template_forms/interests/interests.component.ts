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

  async ngOnInit() {
    //fetching default values if any
    let data = await this.dataService.getData(this.flag,'interests');
    if(data!=null && data['length']>0){
        for(let key in data){
          this.interests.push(data[key]);
        }
    }
  }

  async update(){
    await this.dataService.update(this.flag,'interests',this.interests);
  }

  onEnter(interest){
    interest = interest.trim().toLowerCase();
    if(interest && !this.interests.includes(interest)){
      this.interests.push(interest);
    }
    this.update();
  }

  removeMe(id){
    this.interests.splice(id,1);
    this.update();
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'final':next]);
    this.service.saveData();

  }
}

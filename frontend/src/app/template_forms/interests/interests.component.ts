import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoteStorageService } from '../../services/remote-storage.service';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  public interests=[];

  constructor(private route:ActivatedRoute,private router:Router,private service :RemoteStorageService) { }

  ngOnInit() {
  }

  onEnter(interest){
    interest = interest.trim().toLowerCase();
    if(interest && !this.interests.includes(interest)){
      this.interests.push(interest);
    }
  }

  removeMe(id){
    this.interests.splice(id,1);
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'final':next]);
    this.service.saveData();

  }
}

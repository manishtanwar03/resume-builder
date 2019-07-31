import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class  DashboardComponent implements OnInit {
  filter:String="#479099";
  templates = ['functional','simple'];
  constructor(private router:Router,public authService:AuthService,private dataService:DataService) { }

  ngOnInit() {
    
  }
onSubmit()
{
  this.router.navigate(['/template1']);
}
// filter value
updateFilter(filter){
  this.filter = filter;
}

createResume(template){
  this.dataService.set({'template':template},false);
  this.router.navigate(['/resume','basic-information']);
}

}

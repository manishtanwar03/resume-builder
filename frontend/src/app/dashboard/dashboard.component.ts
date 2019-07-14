import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class  DashboardComponent implements OnInit {
  filter:String="#479099";

  constructor(private router:Router,private authService:AuthService) { }

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

}

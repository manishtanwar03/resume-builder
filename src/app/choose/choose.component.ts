import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit() {
  }
onSubmit()
{
  this.router.navigate(['/template1']);
}
}

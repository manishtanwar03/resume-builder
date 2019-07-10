import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-template',
  templateUrl: './final-template.component.html',
  styleUrls: ['./final-template.component.css']
})
export class FinalTemplateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goTo(path){
    this.router.navigate(['/resume',path],{queryParams:{next:'final'}});
  }
}

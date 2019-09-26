import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-resumes',
  templateUrl: './shared-resumes.component.html',
  styleUrls: ['./shared-resumes.component.css']
})
export class SharedResumesComponent implements OnInit {
  resumes =null;
  loading=0;
  constructor() { }

  ngOnInit() {
  }

}

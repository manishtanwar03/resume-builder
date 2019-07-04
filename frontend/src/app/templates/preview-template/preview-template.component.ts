import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-template',
  templateUrl: './preview-template.component.html',
  styleUrls: ['./preview-template.component.css']
})
export class PreviewTemplateComponent implements OnInit {
  @Input() filter:String="#479099";

  constructor() { }

  ngOnInit() {
  }

}

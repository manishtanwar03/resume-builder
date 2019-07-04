import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills=[];
  constructor() { }

  ngOnInit() {
  }

  onEnter(skill){
    skill = skill.trim()
    if(skill){
      this.skills.push(skill);
    }
  }

  removeMe(id){
    this.skills.splice(id,1);
  }
}

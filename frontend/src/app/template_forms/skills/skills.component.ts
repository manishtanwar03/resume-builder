import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private skills=[];

  constructor() {}

  private getSkills()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('skills'));
    return localStorageItem==null? []  :localStorageItem;
  }

  private setLocalStorageSkills(){
    localStorage.setItem('skills',JSON.stringify(this.skills));
  }

  ngOnInit() {
    this.skills = this.getSkills();
  }

  onEnter(skill){
    skill = skill.trim()
    if(skill && !this.skills.includes(skill)){
      this.skills.push(skill);
      this.setLocalStorageSkills();
    }
  }

  removeMe(id){
    this.skills.splice(id,1);
    this.setLocalStorageSkills();
  }

}

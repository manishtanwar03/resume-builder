import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private skills=[];

  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) {}

  private getSkills()
  {
    let localStorageItem=JSON.parse(localStorage.getItem('skills'));
    return localStorageItem==null? []  :localStorageItem;
  }

  private setLocalStorageSkills(){
    localStorage.setItem('skills',JSON.stringify(this.skills));
    this.service.update('skills',this.skills);
  }

  ngOnInit() {
    this.skills = this.getSkills();
  }

  onEnter(skill){
    skill = skill.trim().toLowerCase();
    if(skill && !this.skills.includes(skill)){
      this.skills.push(skill);
      this.setLocalStorageSkills();
    }
  }

  removeMe(id){
    this.skills.splice(id,1);
    this.setLocalStorageSkills();
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'languages':next]);
  }
}

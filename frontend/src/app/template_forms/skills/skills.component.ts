import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private skills=[];
  flag:boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService) {}

  async ngOnInit() {
    //fetching default values if any
    let data = await this.dataService.getData(this.flag,'skills');
    if(data!=null && data['length']>0){
        for(let key in data){
          this.skills.push(data[key]);
        }
    }
  }

  async update(){
    await this.dataService.update(this.flag,'skills',this.skills);
  }

  onEnter(skill){
    skill = skill.trim().toLowerCase();
    if(skill && !this.skills.includes(skill)){
      this.skills.push(skill);
    }
    this.update();
  }

  removeMe(id){
    this.skills.splice(id,1);
    this.update();
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'languages':next]);
  }
}

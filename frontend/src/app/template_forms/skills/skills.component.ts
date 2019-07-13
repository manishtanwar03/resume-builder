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

   ngOnInit() {
     //fetching previous data
    this.dataService.get().subscribe(
      (res)=>{
        this.skills=[];
        for(let value of res['skills'])
          this.skills.push(value);
      }
    );
  }


  onEnter(skill){
    skill = skill.trim().toLowerCase();
    if(skill && !this.skills.includes(skill)){
      this.skills.push(skill);
    }
    this.dataService.set({'skills':this.skills});
  }

  removeMe(id){
    this.skills.splice(id,1);
    this.dataService.set({'skills':this.skills});
  }

  nextRoute(){
    let next = this.route.snapshot.queryParams.next;
    this.router.navigate(['/resume',next==undefined?'languages':next]);
  }
}

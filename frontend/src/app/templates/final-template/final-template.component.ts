import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RemoteService } from 'src/app/services/remote.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-final-template',
  templateUrl: './final-template.component.html',
  styleUrls: ['./final-template.component.css']
})
export class FinalTemplateComponent implements OnInit {
  resume={};
  constructor(private route:ActivatedRoute,private router:Router,private remoteService:RemoteService,private dataService:DataService) { 
    
  }

  async ngOnInit() {
    this.resume = await this.remoteService.loadOneResume(this.route.snapshot.params.id)
    this.dataService.set(this.resume,true);
  }

  goTo(path){
    this.router.navigate(['/resume',path],{queryParams:{next:this.route.snapshot.params.id}});
  }
}

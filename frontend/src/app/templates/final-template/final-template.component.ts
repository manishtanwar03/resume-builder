import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteStorageService } from 'src/app/services/remote-storage.service';

@Component({
  selector: 'app-final-template',
  templateUrl: './final-template.component.html',
  styleUrls: ['./final-template.component.css']
})
export class FinalTemplateComponent implements OnInit {
  resume={};
  constructor(private route:ActivatedRoute,private router:Router,private remoteStorage:RemoteStorageService) { }

  ngOnInit() {
    let resume_id = this.route.snapshot.params.id;
  }

  goTo(path){
    this.router.navigate(['/resume',path],{queryParams:{next:this.route.snapshot.params.id}});
  }
}

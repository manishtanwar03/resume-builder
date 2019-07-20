import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardModuleRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { TemplateModule } from '../templates/template.module';
import { FiltersComponent } from '../shared/filters/filters.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SavedResumesComponent } from './saved-resumes/saved-resumes.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations:[
        DashboardComponent,
        NavbarComponent,
        SavedResumesComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        MzButtonModule,
        MzInputModule,
        DashboardModuleRouting,
        TemplateModule,
        SharedModule
        
    ],
    providers:[]
})
export class DashboardModule {

}
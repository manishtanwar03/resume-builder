import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardModuleRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { TemplateModule } from '../templates/template.module';
import { FiltersComponent } from './filters/filters.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SavedResumesComponent } from './saved-resumes/saved-resumes.component';



@NgModule({
    declarations:[
        DashboardComponent,
        FiltersComponent,
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
        
    ],
    providers:[]
})
export class DashboardModule {

}
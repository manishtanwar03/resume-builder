import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardModuleRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { TemplateModule } from '../templates/template.module';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
    declarations:[
        DashboardComponent,
        FiltersComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        MzButtonModule,
        MzInputModule,
        DashboardModuleRouting,
        TemplateModule
    ]
})
export class DashboardModule {

}
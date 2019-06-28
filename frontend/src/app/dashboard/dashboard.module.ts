import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardModuleRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations:[
        DashboardComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        DashboardModuleRouting,
    ]
})
export class DashboardModule {

}
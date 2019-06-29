import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardModuleRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations:[
        DashboardComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        MzButtonModule,
        MzInputModule,
        DashboardModuleRouting,
        SharedModule,
    ]
})
export class DashboardModule {

}
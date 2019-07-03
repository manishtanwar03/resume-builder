import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardModuleRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';


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
    ]
})
export class DashboardModule {

}
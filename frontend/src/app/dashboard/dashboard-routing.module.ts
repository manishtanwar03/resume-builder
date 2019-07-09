import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {Page404Component} from '../page404/page404.component';

const routes:Routes=[
    { path:'dashboard',component:DashboardComponent},
    // { path:'**', component:Page404Component}
];
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class DashboardModuleRouting {

}
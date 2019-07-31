import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {Page404Component} from './page404/page404.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

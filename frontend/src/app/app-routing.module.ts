import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {Page404Component} from './page404/page404.component';



const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

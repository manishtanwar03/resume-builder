import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'app',component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

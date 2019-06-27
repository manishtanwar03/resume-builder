import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChooseComponent} from './choose/choose.component';
import {DetailsComponent} from './details/details.component';
import {Template1Component} from './templates/template1/template1.component';

const routes: Routes=[
    {path:'home', component:HomeComponent},
    {path:'choose' , component:ChooseComponent},
    {path:'details',component:DetailsComponent},
    {path:'template1',component:Template1Component}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}

export const routingComponents= [HomeComponent,ChooseComponent,DetailsComponent]
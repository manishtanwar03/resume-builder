import { NgModule } from '@angular/core';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
    {path:'resume',children:[
        { path:'',redirectTo:'basic-information',pathMatch:'full'},
        { path:'basic-information',component:BasicInformationComponent}    
    ]}
];
@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ]
})
export class TemplateFormsRoutingModule{

}
import { NgModule } from '@angular/core';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { LanguagesComponent } from './languages/languages.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import {Page404Component} from '../page404/page404.component';
import { TemplateComponent } from '../templates/template/template.component';


const routes:Routes=[
    {path:'resume',canActivate:[AuthGuard],children:[
        { path:'',redirectTo:'basic-information',pathMatch:'full'},
        { path:'basic-information',component:BasicInformationComponent},
        { path:'work-history',component:WorkHistoryComponent},
        { path:'education',component:EducationComponent},
        { path:'projects',component:ProjectsComponent},
        { path:'skills', component:SkillsComponent},
        { path:'interests',component:InterestsComponent},
        { path:'languages', component:LanguagesComponent},
        { path:'template',component:TemplateComponent}
    ]},
    { path:'**', component:Page404Component}     

];
@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ]
})
export class TemplateFormsRoutingModule{

}
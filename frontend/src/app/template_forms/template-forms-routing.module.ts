import { NgModule } from '@angular/core';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { LanguagesComponent } from './languages/languages.component';

const routes:Routes=[
    {path:'resume',children:[
        { path:'',redirectTo:'basic-information',pathMatch:'full'},
        { path:'basic-information',component:BasicInformationComponent},
        { path:'work-history',component:WorkHistoryComponent},
        { path:'education',component:EducationComponent},
        { path:'projects',component:ProjectsComponent},
        { path:'skills', component:SkillsComponent},
        { path:'interests',component:InterestsComponent},
        { path:'languages', component:LanguagesComponent} 
    ]}
];
@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ]
})
export class TemplateFormsRoutingModule{

}
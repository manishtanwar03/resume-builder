import { NgModule } from '@angular/core';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize'

import { BasicInformationComponent } from './basic-information/basic-information.component';
import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { LanguagesComponent } from './languages/languages.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        BasicInformationComponent,
        WorkHistoryComponent,
        EducationComponent,
        ProjectsComponent,
        SkillsComponent,
        InterestsComponent,
        LanguagesComponent
    ],
    imports:[
        CommonModule,
        MzButtonModule,
    MzInputModule,
    MzSelectModule,
        RouterModule,
        TemplateFormsRoutingModule,
        ReactiveFormsModule
    ],
    exports:[
        BasicInformationComponent
    ]
})
export class TemplateFormsModule{

}
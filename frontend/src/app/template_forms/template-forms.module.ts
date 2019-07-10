import { NgModule } from '@angular/core';
import { MzButtonModule, MzInputModule,MzSelectModule,MzModalModule } from 'ngx-materialize';

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

import { TemplateModule } from '../templates/template.module';
import { DataSliderComponent } from './data-slider/data-slider.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService } from '../services/token-interceptor.service';

@NgModule({
    declarations:[
        BasicInformationComponent,
        WorkHistoryComponent,
        EducationComponent,
        ProjectsComponent,
        SkillsComponent,
        InterestsComponent,
        LanguagesComponent,
        DataSliderComponent
    ],
    imports:[
        CommonModule,
        MzButtonModule,
    MzInputModule,
    MzSelectModule,
    MzModalModule,
        RouterModule,
        TemplateFormsRoutingModule,
        ReactiveFormsModule,
        TemplateModule,
    ],
    exports:[
        BasicInformationComponent
    ],
    providers:[{
        provide:HTTP_INTERCEPTORS,
        useClass:TokenInterceptorService,
        multi:true
    }]
})
export class TemplateFormsModule{

}
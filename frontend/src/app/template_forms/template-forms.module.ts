import { NgModule } from '@angular/core';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize'

import { BasicInformationComponent } from './basic-information/basic-information.component';
import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { EducationComponent } from './education/education.component';

@NgModule({
    declarations:[
        BasicInformationComponent,
        WorkHistoryComponent,
        EducationComponent
    ],
    imports:[
        CommonModule,
        MzButtonModule,
    MzInputModule,
    MzSelectModule,
        RouterModule,
        TemplateFormsRoutingModule,
    ],
    exports:[
        BasicInformationComponent
    ]
})
export class TemplateFormsModule{

}
import { NgModule } from '@angular/core';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        BasicInformationComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        TemplateFormsRoutingModule,
    ],
    exports:[
        BasicInformationComponent
    ]
})
export class TemplateFormsModule{

}
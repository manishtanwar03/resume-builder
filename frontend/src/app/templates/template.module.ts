import { NgModule } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { PreviewTemplateComponent } from './preview-template/preview-template.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExportAsModule } from 'ngx-export-as';
@NgModule({
    declarations:[
        TemplateComponent,
        PreviewTemplateComponent,
        
    ],
    imports:[
        CommonModule,
        RouterModule,
        ExportAsModule
    ],
    exports:[
        TemplateComponent,
        PreviewTemplateComponent
    ]
})
export class TemplateModule{

}
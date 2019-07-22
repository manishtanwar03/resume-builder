import { NgModule } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { PreviewTemplateComponent } from './preview-template/preview-template.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { FinalTemplateComponent } from './final-template/final-template.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations:[
        TemplateComponent,
        PreviewTemplateComponent,
        FinalTemplateComponent,
        
    ],
    imports:[
        CommonModule,
        RouterModule,
        PDFExportModule,
        SharedModule
    ],
    exports:[
        TemplateComponent,
        PreviewTemplateComponent
    ]
})
export class TemplateModule{

}
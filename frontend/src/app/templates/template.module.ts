import { NgModule } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { PreviewTemplateComponent } from './preview-template/preview-template.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MzTooltipModule } from 'ngx-materialize'
import { MzModalModule } from 'ngx-materialize'

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { FinalTemplateComponent } from './final-template/final-template.component';
import { SharedModule } from '../shared/shared.module';
import { SharedDetailsComponent } from './shared-details/shared-details.component';
@NgModule({
    declarations:[
        TemplateComponent,
        PreviewTemplateComponent,
        FinalTemplateComponent,
        SharedDetailsComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        PDFExportModule,
        SharedModule,
        MzModalModule,
        MzTooltipModule
    ],
    exports:[
        TemplateComponent,
        PreviewTemplateComponent
    ],
    entryComponents:[
        SharedDetailsComponent
    ]
})
export class TemplateModule{

}
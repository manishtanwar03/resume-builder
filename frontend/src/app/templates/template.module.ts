import { NgModule } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { PreviewTemplateComponent } from './preview-template/preview-template.component';

@NgModule({
    declarations:[
        TemplateComponent,
        PreviewTemplateComponent
    ],
    exports:[
        TemplateComponent,
        PreviewTemplateComponent
    ]
})
export class TemplateModule{

}
import { NgModule } from "@angular/core";
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        FooterComponent,
        FiltersComponent,
    ],
    imports:[
        CommonModule
    ],
    exports:[
        FooterComponent,
        FiltersComponent
    ]
})
export class SharedModule{

}
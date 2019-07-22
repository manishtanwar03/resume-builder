import { NgModule } from "@angular/core";
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations:[
        FooterComponent,
        FiltersComponent,
        LoaderComponent,
    ],
    imports:[
        CommonModule
    ],
    exports:[
        FooterComponent,
        FiltersComponent,
        LoaderComponent
    ]
})
export class SharedModule{

}
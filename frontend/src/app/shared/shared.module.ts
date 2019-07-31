import { NgModule } from "@angular/core";
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MzSelectModule } from 'ngx-materialize'

@NgModule({
    declarations:[
        FooterComponent,
        FiltersComponent,
        LoaderComponent,
    ],
    imports:[
        CommonModule,
        MzSelectModule
    ],
    exports:[
        FooterComponent,
        FiltersComponent,
        LoaderComponent
    ]
})
export class SharedModule{

}
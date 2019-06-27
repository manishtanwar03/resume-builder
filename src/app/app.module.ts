import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChooseComponent } from './choose/choose.component';
import { DetailsComponent } from './details/details.component';
import { Template1Component } from './templates/template1/template1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseComponent,
    DetailsComponent,
    Template1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

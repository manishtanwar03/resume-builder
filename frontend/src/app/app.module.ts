import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { TemplateFormsModule } from './template_forms/template-forms.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    
  ],
  imports: [
    BrowserModule,
    MzButtonModule,
    MzInputModule,
    SharedModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    TemplateFormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

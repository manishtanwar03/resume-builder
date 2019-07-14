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
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/services/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { TemplateModule } from './templates/template.module';
import { Page404Component } from './page404/page404.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RemoteStorageService } from './services/remote-storage.services';
import { RemoteService } from './services/remote.service';

import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Page404Component,
    
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
    ReactiveFormsModule,
    TemplateModule,
    
  ],
  providers: [AuthService, AuthGuard , CookieService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },RemoteStorageService,DataService,RemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

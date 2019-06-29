import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    // FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    MzButtonModule,
    MzInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

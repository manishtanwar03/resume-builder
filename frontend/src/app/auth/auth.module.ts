import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptorService} from '../services/token-interceptor.service';

@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent
    ],
    imports :[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        HttpClientModule,
        RouterModule
    ],
    providers:[CookieService,
    {
        provide:HTTP_INTERCEPTORS,
        useClass:TokenInterceptorService,
        multi:true
    }]

})

export class AuthModule{

}
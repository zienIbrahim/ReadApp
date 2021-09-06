import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IconsModule } from './icons.module';

import { LoginComponent } from './login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AuthService } from './_Services/Auth.service';


@NgModule({


  declarations: 
  [

    AppComponent,

    HomeComponent,

    LoginComponent

  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
      IconsModule,
      NgbModule,ReactiveFormsModule,

    HttpClientModule,

    FormsModule

  ],
  providers: [AuthService],

  bootstrap: [AppComponent]

})



export class AppModule { }

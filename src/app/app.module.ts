import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgHttpLoaderModule, Spinkit } from 'ng-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ApiComponent } from './views/api/api.component';
import { LocalComponent } from './views/local/local.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApiComponent,
    LocalComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),
    MaterialModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  public spinkit = Spinkit;
 }

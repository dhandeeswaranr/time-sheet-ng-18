import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, provideHttpClient, HttpClient, HttpClientModule} from '@angular/common/http';
import { ApiInterceptor } from './interceptor/api-interceptor';
import { authInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers:[provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    {
    provide:HTTP_INTERCEPTORS,
    useClass:ApiInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

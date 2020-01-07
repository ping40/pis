import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EbbinghausModule } from './ebbinghaus/ebbinghaus.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './shared/auth/auth.module';
import { LoginComponent } from './shared/login/login.component';
import { JwtInterceptor } from './shared/auth/jwt.interceptor';
import { ErrorInterceptor } from './shared/auth/error.interceptor';
import { LoggingInterceptor } from './shared/auth/logging.interceptor';
import { material } from './shared/common.material';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TechModule } from './tech/tech.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent],
  imports: [
    BrowserModule,
    ...material, 
    HttpClientModule,
    AuthModule,
    EbbinghausModule,
    TechModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

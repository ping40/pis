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


@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    ...material,
    BrowserModule, 
    HttpClientModule,
    AuthModule,
    EbbinghausModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

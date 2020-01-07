import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { SessionStore } from './login.store';
import { SessionQuery } from './login.query';
import { SessionService } from './login.service';
import { ShowIfLoggedInDirective } from './login.directive';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    SessionStore,
    SessionQuery,
    SessionService
  ],
  exports:[
    
  ]
})
export class AuthModule { }

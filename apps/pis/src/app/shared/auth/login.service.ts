import { SessionStore, SessionState } from './login.store';
import { AuthenticationService } from '../auth/authentication.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
	
    constructor(private sessionStore: SessionStore, 
      private authenticationService: AuthenticationService) { }
 
    login(name: string, passwd: string) {
       return this.authenticationService.login(name, passwd).pipe(
     tap(session =>{
         this.sessionStore.login(
         {
            name: session.name,
            token: session.token
         }  as SessionState);
         console.log("call  sessionStore login" , JSON.stringify(session));
      }))
     }
    
 
    logout() {
       this.sessionStore.logout();
    }
 }
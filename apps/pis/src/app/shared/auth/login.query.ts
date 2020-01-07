import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore, SessionState } from './login.store';

@Injectable()
export class SessionQuery extends Query<SessionState> {
  
   isLoggedIn$ = this.select(state => toBoolean(state.token));
   name$ = this.select(state => state.name);
   token$ = this.select(state => state.token);

   isLoggedInState =  false;
   constructor(protected store: SessionStore) {
     super(store);
     this.isLoggedIn$.subscribe(v=> this.isLoggedInState = v);
   }


   isLoggedIn() {
     return this.isLoggedInState;
   }
}
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionQuery } from './login.query';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private sessionQuery: SessionQuery
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.sessionQuery.isLoggedIn()) {
            console.log('in AuthGuard true');
            return true;
             }
       
             console.log('in AuthGuard false');
             this.router.navigateByUrl('login', { queryParams: { returnUrl: state.url }});
             return false;
    }
    
}
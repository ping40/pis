import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionQuery } from './login.query';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    token = '';
    constructor(
        private sessionQuery: SessionQuery) { 
            sessionQuery.token$.subscribe( t => this.token =t );
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (this.sessionQuery.isLoggedIn() ) {
            console.log("in JwtInterceptor 001");
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`
                }
            });
        }

        console.log("in JwtInterceptor 002");
        return next.handle(request);
    }
}
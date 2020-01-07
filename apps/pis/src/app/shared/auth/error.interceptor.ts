import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from './login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private sessionService: SessionService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("in ErrorInterceptor:  002 "  );
        
        return next.handle(request).pipe(catchError(err => {
            console.log("in ErrorInterceptor: " + err.status  + ", ok:  "+ JSON.stringify(err));
            //if (err.status === 401) {
           if (err.status === 401 && !window.location.href.includes('/login')) {
                // auto logout if 401 response returned from api
                this.sessionService.logout();
                location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserRO, UserData } from '@pis/api-interfaces';

@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserData>;
    public currentUser: Observable<UserData>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserData {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        console.log("in AuthenticationService login" );
        return this.http.post<UserRO>('/api/user/login', { 'name': username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.user));
                this.currentUserSubject.next(user.user);
                return user.user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
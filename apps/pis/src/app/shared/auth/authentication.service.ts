import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { map } from 'rxjs/operators';

import { UserRO, UserData } from '@pis/api-interfaces';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        console.log("in AuthenticationService login" );
        return this.http.post<UserRO>('/api/user/login', { 'name': username, password })
            .pipe(map(user => {
                return user.user;
            }));
    }

}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;

    constructor(private router: Router, private http: HttpClient) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/mf-service-security/api/auth/login`, { username, password })
            .pipe(map(resp => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                let usuario:User = <User>resp.dataRpta;
                localStorage.setItem('user', JSON.stringify(usuario));
                this.userSubject.next(usuario);
                return resp;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
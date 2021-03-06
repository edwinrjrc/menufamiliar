import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuthenticationService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.authenticationService.userValue;
        const isLoggedIn = user && user.accessToken;
        const isApiUrl = request.url.startsWith(environment.apiUrl_1);
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {   
                    Authorization: `Bearer ${user.accessToken}`
                }
            });
        }
        
        return next.handle(request);
    }
}
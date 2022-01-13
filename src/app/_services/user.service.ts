import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Respuesta } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Respuesta[]>(`${environment.apiUrl_1}/users`);
    }

    registrarUsuario(usuario:any){
        return this.http.post<any>(`${environment.apiUrl_1}/api/users`, {usuario});
    }
}
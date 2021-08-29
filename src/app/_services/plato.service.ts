import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })
  export class PlatoService {

    constructor(protected http: HttpClient) {
    }

    marcarPlatoFavorito(idPlato:number, idPersona:number){
        return this.http.post<any>(`http://desktop-77qekgo:24210/mf-service-plato/platoservice/platoFavorito`, { idPlato, idPersona });
    }
}
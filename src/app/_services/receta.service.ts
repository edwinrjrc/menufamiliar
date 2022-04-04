import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Preparacion } from '@app/_models/preparacion';

@Injectable({
    providedIn: 'root'
})
  export class RecetaService {

    constructor(protected http: HttpClient) {
    }

    guardarModificacionReceta(preparacionModificada:Array<Preparacion>, idPlato:number){
      return this.http.put<any>(`${environment.apiUrl_24215}/mf-service-receta/recetaservice/receta`, { preparacionModificada, idPlato});
    }
}
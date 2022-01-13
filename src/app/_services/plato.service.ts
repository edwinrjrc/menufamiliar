import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class PlatoService {

    constructor(protected http: HttpClient) {
    }

    marcarPlatoFavorito(idPlato:number, idPersona:number){
      return this.http.post<any>(`${environment.apiUrl_24210}/mf-service-plato/platoservice/platoFavorito`, { idPlato, idPersona });
    }
    listarPlatos(idPersona:number){
      return this.http.get<any>(`${environment.apiUrl_24210}/mf-service-plato/platoservice/platos/${ idPersona }`);
    }
    consultaCompletaPlato(idPlato:number){
      return this.http.get<any>(`${environment.apiUrl_24210}/mf-service-plato/platoRecetaservice/plato/${ idPlato }`);
    }

}
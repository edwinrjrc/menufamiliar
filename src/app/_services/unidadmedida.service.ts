import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class UnidadMedidaService {

    constructor(protected http: HttpClient) {
    }

    listarUnidadMedida(){
      return this.http.get<any>(`${environment.apiUrl_24235}/mf-service-ingrediente/unidadMedidaService/unidadesMedida`);
    }

}
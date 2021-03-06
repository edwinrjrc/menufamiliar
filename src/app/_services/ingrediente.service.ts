import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class IngredienteService {

    constructor(protected http: HttpClient) {
    }

    listarIngredientes(){
      return this.http.get<any>(`${environment.apiUrl_24235}/mf-service-ingrediente/ingredienteService/ingredientes`);
    }

    exportarListaIngredientesMenu(idMenu:number){
      return this.http.get<any>(`${environment.apiUrl_24235}/mf-service-ingrediente/ingredienteMenuService/ingredientesExport/${idMenu}`);  
    }
}
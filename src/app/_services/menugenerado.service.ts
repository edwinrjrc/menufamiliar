import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenugeneradoService {

  constructor(protected http: HttpClient) {
  }
  
  generarMenu(idUsuario: string, idPersona: string){
    return this.http.post<any>(`${environment.apiUrl_24209}/mf-service-menu/menuservice/menugenerado`, { idUsuario, idPersona });
  }

  consultarMenuGenerado(idPersona: string){
    return this.http.get<any>(`${environment.apiUrl_24209}/mf-service-menu/menuservice/menuGenerado/${ idPersona }`);
  }

  cambiarMenuDia(idPersona: string, idTipoPlato: string, fechaConsumo: string){
    return this.http.put<any>(`${environment.apiUrl_24209}/mf-service-menu/menuservice/menuDetalle`, {idPersona, idTipoPlato, fechaConsumo})
  }
}

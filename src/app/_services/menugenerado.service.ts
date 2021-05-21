import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenugeneradoService {

  constructor(private http: HttpClient) {
  }
  
  generarMenu(idUsuario: string, idPersona: string){
    console.log('fin de llamada ::'+idPersona);
    return this.http.post<any>(`http://desktop-77qekgo:24209/mf-service-menu/menuservice/menugenerado`, { idUsuario, idPersona });
    //return this.consultarMenuGenerado(idPersona);
    //console.log('fin de llamada ::'+idPersona);
  };

}

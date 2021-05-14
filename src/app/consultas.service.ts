import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(protected http: HttpClient) { }
  /*http://127.0.0.1:8080/menufamiliar-web/menufam/consulta*/
  getMenuGenerado() {
    return this.http.get('');
  }
}

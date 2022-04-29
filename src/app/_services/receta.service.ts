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

    guardarComentarioReceta(idPlato:number, comentario:string, idUsuarioRegistro:string){
      return this.http.post<any>(`${environment.apiUrl_24215}/mf-service-receta/recetaservice/comentariosReceta`, { idPlato, comentario,idUsuarioRegistro});
    }

    eliminarComentarioReceta(idComentarioPlato:number,idUsuario:number){
      return this.http.delete<any>(`${environment.apiUrl_24215}/mf-service-receta/recetaservice/comentariosReceta/${idComentarioPlato}/${idUsuario}`);
    }

    consultarComentarios(idPlato: number){
      return this.http.get<any>(`${environment.apiUrl_24215}/mf-service-receta/recetaservice/comentariosReceta/${idPlato}`);
    }

}
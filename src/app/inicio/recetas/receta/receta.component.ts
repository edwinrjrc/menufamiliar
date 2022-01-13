import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { PlatoService } from '@app/_services';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  v_idPlato:string;
  v_nomPlato : string;
  v_deplato : string;
  v_ingredientes: any;
  v_preparacion: any;

  constructor(private rutaActiva: ActivatedRoute, private platoService: PlatoService) { }

  ngOnInit(): void {
    this.v_idPlato = this.rutaActiva.snapshot.params.idPlato;
    this.platoService.consultaCompletaPlato(parseInt(this.v_idPlato)).subscribe(resp => {
      this.v_nomPlato = resp.dataRpta.VALOR_DTO.nombrePlato;
      this.v_deplato = resp.dataRpta.VALOR_DTO.descripcionPlato;
      this.v_ingredientes = resp.dataRpta.LISTA_INGREDIENTES;
      this.v_preparacion = resp.dataRpta.LISTA_RECETA;
    });
  }

}

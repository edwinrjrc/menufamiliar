import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { IngredienteService, PlatoService, UnidadMedidaService } from '@app/_services';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FaConfig } from '@fortawesome/angular-fontawesome';

import { IngredienteReceta } from '@app/_models/ingredienteReceta';
import { Ingrediente, UnidadMedida } from '@app/_models';
import { Preparacion } from '@app/_models/preparacion';


@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  v_idPlato: string;
  v_nomPlato: string;
  v_deplato: string;
  v_ingredientes: Array<any>;
  v_preparacion: any[];
  v_listaRecetaModal: Array<IngredienteReceta>;
  v_preparacionModal: Array<Preparacion>;
  closeResult = '';
  listaUnidades: any[] = [];
  listaIngredientes: any[] = [];

  constructor(private rutaActiva: ActivatedRoute, private unidadMedidaService: UnidadMedidaService, private platoService: PlatoService, private ingredienteService: IngredienteService, private modalService: NgbModal, private faConfig: FaConfig) {
    faConfig.defaultPrefix = 'far';
  }

  ngOnInit(): void {
    this.v_idPlato = this.rutaActiva.snapshot.params.idPlato;
    this.platoService.consultaCompletaPlato(parseInt(this.v_idPlato)).subscribe(resp => {
      this.v_nomPlato = resp.dataRpta.VALOR_DTO.nombrePlato;
      this.v_deplato = resp.dataRpta.VALOR_DTO.descripcionPlato;
      this.v_ingredientes = resp.dataRpta.LISTA_INGREDIENTES;
      this.v_preparacion = resp.dataRpta.LISTA_RECETA;

      for (var i=0; i<this.v_ingredientes.length; i++){
        let ingreReceta:IngredienteReceta  = new IngredienteReceta();
        ingreReceta.Cantidad = this.v_ingredientes[i].cantidad;
        ingreReceta.UnidadMedida = new UnidadMedida();
        ingreReceta.UnidadMedida.IdUnidadMedida = this.v_ingredientes[i].unidadMedida.codigo;
        ingreReceta.UnidadMedida.DescripcionUnidadMedida = this.v_ingredientes[i].unidadMedida.nombre;
        ingreReceta.Ingrediente = new Ingrediente();
        ingreReceta.Ingrediente.IdIngrediente = this.v_ingredientes[i].ingrediente.id;
        ingreReceta.Ingrediente.DescripcionIngrediente = this.v_ingredientes[i].ingrediente.nombreIngrediente;
        this.v_listaRecetaModal.push(ingreReceta);
      }

      for (var i=0; i<this.v_preparacion.length; i++){
        let preparacion:Preparacion = new Preparacion();
        preparacion.NroPaso = this.v_preparacion[i].idPaso;
        preparacion.DescripcionPaso = this.v_preparacion[i].descripcionReceta;
        preparacion.Tiempo = this.v_preparacion[i].minutosCompletar;
        this.v_preparacionModal.push(preparacion);
      }
    });

    this.unidadMedidaService.listarUnidadMedida().subscribe(resp => {
      this.listaUnidades = resp.dataRpta;
    });
    this.ingredienteService.listarIngredientes().subscribe(resp => {
      this.listaIngredientes = resp.dataRpta;
    });
    this.v_listaRecetaModal = new Array<IngredienteReceta>();
    this.v_preparacionModal = new Array<any>();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  agregarListaReceta(){
    let ingreReceta:IngredienteReceta  = new IngredienteReceta();
    ingreReceta.UnidadMedida = new UnidadMedida();
    ingreReceta.Ingrediente = new Ingrediente();
    this.v_listaRecetaModal.push(ingreReceta);
  }

  eliminarElementoReceta(index:number){
    this.v_listaRecetaModal.splice(index,1);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  enviarPasoPreparacionAInicio(){
    console.log("Paso");
  }

}

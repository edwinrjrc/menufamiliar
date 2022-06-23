import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { IngredienteService, PlatoService, UnidadMedidaService } from '@app/_services';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FaConfig } from '@fortawesome/angular-fontawesome';

import { IngredienteReceta } from '@app/_models/ingredienteReceta';
import { Ingrediente, UnidadMedida, User } from '@app/_models';
import { Preparacion } from '@app/_models/preparacion';
import { RecetaService } from '@app/_services/receta.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  private userSubject: BehaviorSubject<User>;
  v_idPlato: string;
  v_nomPlato: string;
  v_deplato: string;
  v_comentarioReceta: string;
  v_ingredientes: Array<any>;
  v_preparacion: any[];
  v_comentarios: any[];
  v_listaRecetaModal: Array<IngredienteReceta>;
  v_preparacionModal: Array<Preparacion>;
  closeResult = '';
  listaUnidades: any[] = [];
  listaIngredientes: any[] = [];
  public idUser: string = '';
  public idUserNumber: number;

  constructor(private rutaActiva: ActivatedRoute, private unidadMedidaService: UnidadMedidaService, private platoService: PlatoService, private ingredienteService: IngredienteService, private modalService: NgbModal, private faConfig: FaConfig, private recetaService:RecetaService) {
    faConfig.defaultPrefix = 'far';
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    if (this.userSubject.value != null) {
      this.idUser = this.userSubject.value.id.toString();
      this.idUserNumber = parseInt(this.idUser);
    }
  }

  ngOnInit(): void {
    this.v_idPlato = this.rutaActiva.snapshot.params.idPlato;
    this.platoService.consultaCompletaPlato(parseInt(this.v_idPlato)).subscribe(resp => {
      this.v_nomPlato = resp.dataRpta.VALOR_DTO.nombrePlato;
      this.v_deplato = resp.dataRpta.VALOR_DTO.descripcionPlato;
      this.v_ingredientes = resp.dataRpta.LISTA_INGREDIENTES;
      this.v_preparacion = resp.dataRpta.LISTA_RECETA;
      this.v_comentarios = resp.dataRpta.LISTA_COMENTARIOS;

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

  agregarListaReceta(idxLista: number){
    let ingreReceta:IngredienteReceta  = new IngredienteReceta();
    ingreReceta.UnidadMedida = new UnidadMedida();
    ingreReceta.Ingrediente = new Ingrediente();

    this.v_listaRecetaModal.splice(idxLista+1, 0, ingreReceta);
  }

  agregarListaPreparacion(idxLista: number){
    let preparacion:Preparacion = new Preparacion();

    this.v_preparacionModal.splice(idxLista+1, 0, preparacion);

    for (var i=0; i<this.v_preparacionModal.length; i++){
      this.v_preparacionModal[i].NroPaso = i+1;
    }
  }

  eliminarElementoReceta(index:number){
    this.v_listaRecetaModal.splice(index,1);
  }

  eliminarPreparacion(index:number){
    this.v_preparacionModal.splice(index,1);

    for (var i=0; i<this.v_preparacionModal.length; i++){
      this.v_preparacionModal[i].NroPaso = i+1;
    }
  }

  bajarPasoPreparacion(index:number){
    this.v_preparacionModal[index].NroPaso = this.v_preparacionModal[index].NroPaso + 1;
    this.v_preparacionModal[index+1].NroPaso = this.v_preparacionModal[index+1].NroPaso - 1;

    let prepa_1:Preparacion = this.v_preparacionModal[index];
    let prepa_2:Preparacion = this.v_preparacionModal[index+1];

    this.v_preparacionModal[index] = prepa_2;
    this.v_preparacionModal[index+1] = prepa_1;
  }

  subirPasoPreparacion(index:number){
    this.v_preparacionModal[index].NroPaso = this.v_preparacionModal[index].NroPaso - 1;
    this.v_preparacionModal[index-1].NroPaso = this.v_preparacionModal[index-1].NroPaso + 1;

    let prepa_1:Preparacion = this.v_preparacionModal[index];
    let prepa_2:Preparacion = this.v_preparacionModal[index-1];

    this.v_preparacionModal[index] = prepa_2;
    this.v_preparacionModal[index-1] = prepa_1;
  }

  enviarPasoPreparacionAInicio(index:number){
    let v_pasos = 1;
    let v_preparacionModal_2: Array<Preparacion>;
    v_preparacionModal_2 = new Array<Preparacion>();
    this.v_preparacionModal[index].NroPaso = v_pasos;
    v_preparacionModal_2.push(this.v_preparacionModal[index]);
    
    v_pasos++;

    for (var i=0; i<this.v_preparacionModal.length; i++){
      if (i != index){
        this.v_preparacionModal[i].NroPaso = v_pasos;
        v_preparacionModal_2.push(this.v_preparacionModal[i]);
        v_pasos++;
      }
    }

    this.v_preparacionModal = v_preparacionModal_2;
  }

  enviarPasoPreparacionAFin(index:number){
    let v_pasos = 1;
    let v_preparacionModal_2: Array<Preparacion>;
    v_preparacionModal_2 = new Array<Preparacion>();

    for (var i=0; i<this.v_preparacionModal.length; i++){
      if (i != index){
        this.v_preparacionModal[i].NroPaso = v_pasos;
        v_preparacionModal_2.push(this.v_preparacionModal[i]);
        v_pasos++;
      }
    }

    this.v_preparacionModal[index].NroPaso = v_pasos;
    v_preparacionModal_2.push(this.v_preparacionModal[index]);

    this.v_preparacionModal = v_preparacionModal_2;
  }

  guardarReceta(){
    this.recetaService.guardarModificacionReceta(this.v_preparacionModal,parseInt(this.v_idPlato)).subscribe(resp => {
      console.log('Guardar receta');
    });
  }

  guardarComentarioReceta(){
    this.recetaService.guardarComentarioReceta(parseInt(this.v_idPlato),this.v_comentarioReceta,this.idUser).subscribe(resp => {
      this.consultarComentarios(parseInt(this.v_idPlato));
    });
    this.v_comentarioReceta = '';
  }

  eliminarComentarioReceta(idComentarioReceta: number){
    console.log(idComentarioReceta);
    this.recetaService.eliminarComentarioReceta(idComentarioReceta,parseInt(this.idUser)).subscribe(resp => {
      this.consultarComentarios(parseInt(this.v_idPlato));
    });
    this.v_comentarioReceta = '';
  }

  consultarComentarios(idPlato: number){
    this.recetaService.consultarComentarios(idPlato).subscribe(resp => {
      console.log(resp);
      this.v_comentarios = resp.dataRpta;
    });
  }

  triggerFunction(event: any) {
    console.log(event);
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
}

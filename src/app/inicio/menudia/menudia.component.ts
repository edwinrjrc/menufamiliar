import { Component, OnInit, Input } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { MenugeneradoService, PlatoService } from '@app/_services';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { User } from '@app/_models';

import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MenugeneradoComponent } from '../menugenerado/menugenerado.component';

@Component({
  selector: 'app-menudia',
  templateUrl: './menudia.component.html',
  styleUrls: ['./menudia.component.css']
})
export class MenudiaComponent implements OnInit {
  private userSubject: BehaviorSubject<User>;
  public idUser:string = '';
	closeResult = '';

  @Input() menudiabean: any;

  constructor(faConfig: FaConfig, private menugeneradoService: MenugeneradoService, private platoService: PlatoService, private menugeneradoComponent: MenugeneradoComponent, private modalService: NgbModal) {
    faConfig.defaultPrefix = 'far';
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      if (this.userSubject.value != null){
        this.idUser = this.userSubject.value.id.toString();
      }
  }

  ngOnInit(): void {

  }

  cambiarMenuDia(idTipoPlato: string, fechaconsumo:string): void{
    this.menugeneradoService.cambiarMenuDia(this.idUser,idTipoPlato,fechaconsumo).subscribe(resp => {
      this.menugeneradoComponent.consultarMenuGenerado(this.idUser);
      console.log('Consulta de menu semana');
    });
  }

  marcarPlatoFavorito(idPlato: string){
    this.menudiabean.platoDto.favorito = true;
    this.platoService.marcarPlatoFavorito(parseInt(idPlato), parseInt(this.idUser)).subscribe(resp => {
      console.log(resp);
    })
  }
  desmarcarPlatoFavorito(idPlato: string){
    this.menudiabean.platoDto.favorito = false;
    this.platoService.marcarPlatoFavorito(parseInt(idPlato), parseInt(this.idUser)).subscribe(resp => {
      console.log(resp);
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

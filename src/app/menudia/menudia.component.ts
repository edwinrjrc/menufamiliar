import { Component, OnInit, Input } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

import { MenugeneradoService, PlatoService } from '@app/_services';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { User } from '@app/_models';

import { InicioComponent } from '@app/inicio/inicio.component';

@Component({
  selector: 'app-menudia',
  templateUrl: './menudia.component.html',
  styleUrls: ['./menudia.component.css']
})
export class MenudiaComponent implements OnInit {
  private userSubject: BehaviorSubject<User>;
  public idUser:string = '';
	
  @Input() menudiabean: any;

  constructor(faConfig: FaConfig, private menugeneradoService: MenugeneradoService, private platoService: PlatoService, private inicioComponent: InicioComponent) {
    faConfig.defaultPrefix = 'far';
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      if (this.userSubject.value != null){
        this.idUser = this.userSubject.value.id.toString();
      }
  }

  ngOnInit(): void {

  }

  cambiarMenuDia(idTipoPlato: string, fechaconsumo:string): void{
    console.log('Invocando al boton de cambio de menu dia');
    console.log('idTipoPlato::'+idTipoPlato);
    console.log('fechaconsumo::'+fechaconsumo);
    
    this.menugeneradoService.cambiarMenuDia(this.idUser,idTipoPlato,fechaconsumo).subscribe(resp => {
      this.inicioComponent.consultarMenuGenerado(this.idUser);
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
}

import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

import { AuthenticationService } from '@app/_services';
import { MenugeneradoService } from '@app/_services';

import { User } from '@app/_models';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private userSubject: BehaviorSubject<User>;
  listaMenuSemana: any[] = [];
  public inicio:boolean;
  public recetas:boolean;
  public idUser:string = '';
    
  constructor(faConfig: FaConfig, private authenticationService: AuthenticationService, private menugeneradoService: MenugeneradoService) {
      faConfig.defaultPrefix = 'far';
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      if (this.userSubject.value != null){
        this.idUser = this.userSubject.value.id.toString();
      }
      this.inicio = true;
      this.recetas = false;
  }
  
  ngOnInit() {
    this.consultarMenuGenerado(this.idUser);
  }
	
	cerrarSesion(){
		this.authenticationService.logout();
	}
	
	generarMenu(){    
		this.menugeneradoService.generarMenu(this.idUser, this.idUser).subscribe(resp => {
      this.consultarMenuGenerado(this.idUser);
    });
	}

  consultarMenuGenerado(idPersona:string){
    /*console.log(idPersona);
    this.menugeneradoService.consultarMenuGenerado(idPersona).subscribe(resp => {
      this.listaMenuSemana = resp.dataRpta;
      //console.log('Menu generado consultado');
      //console.log(this.listaMenuSemana);
    });*/
  }

  cambiarARecetas(){
    this.inicio = false;
    this.recetas = true;
  }
  cambiarAInicio(){
    this.inicio = true;
    this.recetas = false;
  }
}

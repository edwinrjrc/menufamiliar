import { Component, OnInit } from '@angular/core';
import { Menudiabean } from '../menudiabean';
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
  public user: Observable<User>;

	listaSemana: any[] = [];
    
  constructor(faConfig: FaConfig, private authenticationService: AuthenticationService, private menugeneradoService: MenugeneradoService) {
      faConfig.defaultPrefix = 'far';
  }
  
  ngOnInit() {
  }
	
	cerrarSesion(){
		this.authenticationService.logout();
	}
	
	generarMenu(){
    console.log('LLamando al boton');
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
    
		this.menugeneradoService.generarMenu(this.userSubject.value.id+'', this.userSubject.value.id+'');
	}
}

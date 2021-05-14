import { Component, OnInit } from '@angular/core';
import { Menudiabean } from '../menudiabean';
import { FaConfig } from '@fortawesome/angular-fontawesome';

import { AuthenticationService } from '@app/_services';
import { MenugeneradoService } from '@app/_services';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
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
		
	}
}

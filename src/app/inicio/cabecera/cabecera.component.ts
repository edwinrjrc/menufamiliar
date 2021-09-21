import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { 
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authenticationService.logout();
  }
}

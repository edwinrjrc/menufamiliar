import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

import { AuthenticationService } from '@app/_services';
import { MenugeneradoService } from '@app/_services';

import { User } from '@app/_models';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-menugenerado',
  templateUrl: './menugenerado.component.html',
  styleUrls: ['./menugenerado.component.css']
})
export class MenugeneradoComponent implements OnInit {
  private userSubject: BehaviorSubject<User>;
  public idUser: string = '';
  listaMenuSemana: any[] = [];
  public inicio: boolean;
  public recetas: boolean;
  

  constructor(faConfig: FaConfig, private authenticationService: AuthenticationService, private menugeneradoService: MenugeneradoService) {
    faConfig.defaultPrefix = 'far';
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    if (this.userSubject.value != null) {
      this.idUser = this.userSubject.value.id.toString();
    }
  }

  ngOnInit(): void {
    this.consultarMenuGenerado(this.idUser);
  }

  generarMenu() {
    this.menugeneradoService.generarMenu(this.idUser, this.idUser).subscribe(resp => {
      this.consultarMenuGenerado(this.idUser);
    });
  }

  consultarMenuGenerado(idPersona: string) {
    this.menugeneradoService.consultarMenuGenerado(idPersona).subscribe(resp => {
      console.log(resp);
      this.listaMenuSemana = resp.dataRpta;
    });
  }

}

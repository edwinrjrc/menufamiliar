import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

import { AuthenticationService, IngredienteService } from '@app/_services';
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


  constructor(faConfig: FaConfig, private authenticationService: AuthenticationService, private menugeneradoService: MenugeneradoService, private ingredienteService: IngredienteService) {
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
      this.listaMenuSemana = resp.dataRpta;
    });
  }

  exportarListaIngredientes() {
    this.ingredienteService.exportarListaIngredientesMenu(50).subscribe(resp => {
      this.downloadFile(resp.dataRpta);
    });
  }

  downloadFile(data: any) {
    const byteCharacters = atob(data.bytes64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = data.nombreArchivo;
    a.click();
    URL.revokeObjectURL(url);
  }

}

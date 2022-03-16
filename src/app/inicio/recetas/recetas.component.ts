import { Component, OnInit } from '@angular/core';
import { PlatoService } from '@app/_services';

import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { User } from '@app/_models';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  private userSubject: BehaviorSubject<User>;
  public idUser: string = '';
  nombrePlato = '';
  listaPlatos: any[] = [];

  constructor(private platoService:PlatoService, private faConfig: FaConfig) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    if (this.userSubject.value != null) {
      this.idUser = this.userSubject.value.id.toString();
    }
    faConfig.defaultPrefix = 'far';
  }

  ngOnInit(): void {
    this.listarPlatos();
  }

  listarPlatos(){
    this.platoService.listarPlatos(parseInt(this.idUser)).subscribe(resp => {
      this.listaPlatos = resp.dataRpta;
    })
  }

}

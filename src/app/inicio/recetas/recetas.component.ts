import { Component, OnInit } from '@angular/core';
import { PlatoService } from '@app/_services';

import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { User } from '@app/_models';

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

  constructor(private platoService:PlatoService) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    if (this.userSubject.value != null) {
      this.idUser = this.userSubject.value.id.toString();
    }
  }

  ngOnInit(): void {
    console.log('Recetas platos');
    this.listarPlatos();
  }

  listarPlatos(){
    this.platoService.listarPlatos(parseInt(this.idUser)).subscribe(resp => {
      console.log(resp);
      this.listaPlatos = resp.dataRpta;
    })
  }

}

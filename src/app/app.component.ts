import { Component, OnInit } from '@angular/core';
import { Menudiabean } from './menudiabean';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menufamiliar';
  
  listaSemana: any[] = [];
    
  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'far';
  }
  
  ngOnInit() {
  }
}


import { Component, OnInit, Input } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { Menudiabean } from '../menudiabean';

@Component({
  selector: 'app-menudia',
  templateUrl: './menudia.component.html',
  styleUrls: ['./menudia.component.css']
})
export class MenudiaComponent implements OnInit {
	
  @Input() menudiabean: any;

  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'far';
  }

  ngOnInit(): void {
	  
  }

}

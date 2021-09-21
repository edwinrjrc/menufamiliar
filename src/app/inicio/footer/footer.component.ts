import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'far';
  }

  ngOnInit(): void {
  }

}

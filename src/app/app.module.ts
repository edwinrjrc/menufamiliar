import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

//FONT AWESOME
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

//COMPONENTES
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabeceraComponent } from './inicio/cabecera/cabecera.component';
import { CabeceramenugeneradoComponent } from './inicio/cabeceramenugenerado/cabeceramenugenerado.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { MenudiaComponent } from './inicio/menudia/menudia.component';
import { MenugeneradoComponent } from './inicio/menugenerado/menugenerado.component';
import { RecetasComponent } from './inicio/recetas/recetas.component';

//
import { JwtInterceptor } from './_helpers';
import { ErrorInterceptor } from './_helpers';
import { FiltroplatosPipe } from './inicio/filtroplatos.pipe';
import { RecetaComponent } from './inicio/recetas/receta/receta.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InicioComponent,
    CabeceraComponent,
    CabeceramenugeneradoComponent,
    FooterComponent,
    MenudiaComponent,
    MenugeneradoComponent,
    RecetasComponent,
    FiltroplatosPipe,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
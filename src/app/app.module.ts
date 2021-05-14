import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './footer/footer.component';
import { MenudiaComponent } from './menudia/menudia.component';
import { InicioComponent } from './inicio/inicio.component';
import { IndexComponent } from './index/index.component';

import { BasicAuthInterceptor, ErrorInterceptor, JwtInterceptor } from './_helpers';
//import { fakeBackendProvider } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenudiaComponent,
    InicioComponent,
    IndexComponent
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
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

	  // provider used to create fake backend
	  //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(library: FaIconLibrary) {
      library.addIconPacks(fas, far, fab);
    }
}
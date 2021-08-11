import { NgModule } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ClienteComponent } from './cliente/cliente.component';
//import { FacturaComponent } from './factura/factura.component';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BotonesComponent } from './botones/botones.component';
import { PeliculasService } from './services/peliculas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarruselComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

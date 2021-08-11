
import { Component, OnInit, Output} from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private servicePelicula: PeliculasService) { }
  
  arregloPeliculas:any;
  peliculasele:string=this.servicePelicula.categoriaSelect;
  
  ngOnInit(): void {
    this.arregloPeliculas=this.servicePelicula.peliculas
  }

  seleccionarCategoria(index:number){
    this.servicePelicula.guardarSeleccion(index);
    this.peliculasele=this.servicePelicula.genero[0];
  }

  cambiarselect(selectcat:string){
    this.peliculasele=selectcat;
  }


}

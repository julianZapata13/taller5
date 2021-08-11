import { Component, OnInit, Output } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  style="margin-right: 2%; background-color: rgb(139, 135, 135); width:100px ; height:40px ;"
  style2="margin-right: 2%; color: rgb(255, 255, 255); background-color: rgb(72, 103, 187); width:100px ; height:40px ;"
  textoBoton1="Anterior"
  textoBoton2="Siguiente"
  peliculasele="";
  indexInicial=this.servicePelicula.indexPelicula;

  
  constructor(public servicePelicula: PeliculasService) { }


  @Output() seleccionarCat = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

  verSiguiente(){
  
    this.indexInicial=this.servicePelicula.indexPelicula;
    this.peliculasele=this.servicePelicula.genero[this.indexInicial];
    this.seleccionarCat.emit(this.peliculasele);
    this.servicePelicula.aumentarIndexPelicula();
    
   
  }

  verAnterior(){
    this.indexInicial=this.indexInicial-1
    this.peliculasele=this.servicePelicula.genero[this.indexInicial];
    this.seleccionarCat.emit(this.peliculasele);
    this.servicePelicula.disminuirIndexPelicula();
    
  }
  

}

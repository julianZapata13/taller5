import { Component, Input, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  @Input() peliSelect:string=""


  constructor(public servicePelicula: PeliculasService) { 

  }

  ngOnInit(): void {
    
  }

}
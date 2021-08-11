import { Injectable } from '@angular/core';


export class PeliculasService {

 public indexCategoria:number=0;
 public indexPelicula:number=1;

  public peliculas=[
    {
      "categoria":"Terror",
      "produccion":["https://dam.tuenlinea.com/wp-content/uploads/2020/08/pelis-terror.jpg",
                    "https://larepublica.pe/resizer/9RrIkSsGY6fMq9E5UsBKCPuVcI4=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/QTAQ6ZDTVRCGRISOUSO6Z7Q4EY.jpg",
                    "https://img.europapress.es/fotoweb/fotonoticia_20200401152715_1200.jpg"]
    },
    {
      "categoria":"Comedia",
      "produccion":["https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/17/15896708628941.jpg",
                    "https://i.ytimg.com/vi/LVTKodL4Zzs/maxresdefault.jpg",
                    "https://lanetaneta.com/wp-content/uploads/2019/12/Las-10-pel%C3%ADculas-de-comedia-m%C3%A1s-subestimadas-de-los-%C3%BAltimos.jpg"]
    },
    {
      "categoria":"Acción",
      "produccion":["https://m.guiadelocio.com/var/guiadelocio.com/storage/images/a-fondo/las-peliculas-de-accion-mas-esperadas-de-2020/accion-2020/38994735-1-esl-ES/accion-2020.jpg",
                    "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/a-fondo/las-peliculas-que-han-fracasado-o-triunfado-este-verano/exitos-y-fracasos-veraniegos-2018/36151864-1-esl-ES/exitos-y-fracasos-veraniegos-2018.jpg",
                    "https://cines.com/files/2017/12/estrenos-cine-accion-2018.jpg"]
    }
    
    ]

  //se inicializa la pelicula a  mostrar
 categoriaSelect=this.peliculas[this.indexCategoria].produccion[0];
 genero:string[]=this.peliculas[this.indexCategoria].produccion
 

  constructor() { }

  guardarSeleccion(index:number){
    
    this.indexCategoria=index;
    this.indexPelicula=1;
    this.categoriaSelect=this.peliculas[this.indexCategoria].produccion[this.indexPelicula];
    this.genero=this.peliculas[this.indexCategoria].produccion;
    
    
  }

  aumentarIndexPelicula(){
    
    this.indexPelicula=this.indexPelicula+1;
   

  }

  disminuirIndexPelicula(){
    
    this.indexPelicula=this.indexPelicula-1;
    
  }


  
 
}

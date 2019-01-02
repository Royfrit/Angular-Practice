import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Joseph',
      especialidad: 'Js',
      descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
      nombre: 'Liset',
      especialidad: 'Css',
      descripcion: 'lorem lorem lorem lorem lorem lorem lorem lorem'
    }
  ]

  constructor() { 
    console.log('funcionando servicio')
  }

  obtenerEquipo(){
    return this.equipo;
  }
  obtenerUno(i){
    return this.equipo[i];
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndmortyService {

  private urlRick:string='https://rickandmortyapi.com/api/'

  constructor(private http:HttpClient) {}


  private peticion (tipo:string)
  {
    return this.http.get(`${this.urlRick}${tipo}`)
  }

  getEpisodios(tipo:string)
  {
    return this.peticion(tipo)
  }

  //Obtiene el personaje desde la Url Completa
  getPersonaje(url:string)
  {
    return this.http.get(url)
  }

  getPersonajeById(id:string)
  {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }


}

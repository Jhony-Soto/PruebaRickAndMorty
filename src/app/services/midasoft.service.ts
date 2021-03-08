import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MidasoftService {

  private urlMidasoft:string='https://pruebas.midasoft.co:5443/Apis_DLLO/'

  private reqHeaders=new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  //Iniciar session
  initSession(info)
  {
    return this.http.post(`${this.urlMidasoft}Security/api/SEG`,info)
  }

  // Registrar un usuario
  adduser(data)
  {
    return this.http.post(`${this.urlMidasoft}Seleccion/api/SOL/RegistroInicialSolicitante`,data)
  }

  //Operaciones con los favoritos
  favoriteAdd(body:{})
  {
    return this.http.post(`${this.urlMidasoft}Seleccion/api/Favoritos`,body,{headers:this.reqHeaders})
  }
  favoritesAll()
  {
    return this.http.get(`${this.urlMidasoft}Seleccion/api/Favoritos`,{headers:this.reqHeaders})
  }

  deleteFavorito(id:Number)
  {

    let option={
        headers:this.reqHeaders,
        body:{id_caracter:id}
    }

    return this.http.delete(`${this.urlMidasoft}Seleccion/api/Favoritos/`,option)
  }

}

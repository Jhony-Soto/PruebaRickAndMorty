import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MidasoftService {

  private urlMidasoft:string='https://pruebas.midasoft.co:5443/Apis_DLLO/'

  constructor(private http: HttpClient) { }

  //Registrar un nuevo usuario
  registerUser()
  {
    return 'registro '
  }

}

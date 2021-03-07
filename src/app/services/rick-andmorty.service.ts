import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndmortyService {

  // private urlMidasoft:string='https://pruebas.midasoft.co:5443/Apis_DLLO/'

  constructor(private http:HttpClient) {
    console.log('elsserviucio');
  
  }
}

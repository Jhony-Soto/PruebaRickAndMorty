import { analyzeNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Params}  from '@angular/router'
import { RickAndmortyService } from 'src/app/services/rick-andmorty.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: [
    './personajes.component.css'
  ]
})
export class PersonajesComponent implements OnInit {

  personajes:[];
  nameEpisodio:string;
  tipo='url'
  constructor(private route:ActivatedRoute,
              private rickSvc:RickAndmortyService
          ) { 
   

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPersonajes(params.id)
    });
  }

  getPersonajes(idEpisodio:Number)
  {
    this.rickSvc.getEpisodios(`episode/${idEpisodio}`)
        .subscribe(res=>{
          this.nameEpisodio=res['name']
          this.personajes=res['characters']
        })
  }

}

import { Component, Input,OnInit,OnChanges} from '@angular/core';

// servicios
import { RickAndmortyService } from 'src/app/services/rick-andmorty.service';
import { MidasoftService } from 'src/app/services/midasoft.service';

import { PersonajeInterface } from 'src/app/Pages/personajes/personaje.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit,OnChanges {

@Input() personaje:string;
@Input() tipo:string;


  dataPerson:PersonajeInterface={}; 

  responseFavorite:boolean=false 
  messageAlert:string;
  errorFavorite:boolean;

  constructor(
    private rickSvc:RickAndmortyService,
    private midasoftSvc:MidasoftService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.tipo=='url'){
      this.rickSvc.getPersonaje(this.personaje)
        .subscribe((res:PersonajeInterface)=>{
          this.dataPerson={
            id:res.id,
            name:res.name,
            status:res.status,
            species:res.species,
            type:res.type,
            gender:res.gender,
            image:res.image
          }
          
        })
    }else{
      this.rickSvc.getPersonajeById(this.personaje)
      .subscribe((res:PersonajeInterface)=>{
        this.dataPerson={
          id:res.id,
          name:res.name,
          status:res.status,
          species:res.species,
          type:res.type,
          gender:res.gender,
          image:res.image
        }
        
      })
    }
  }

  addFavorite(idPersonaje:Number)
  {
    let body={
      id_caracter:idPersonaje
    }
    this.midasoftSvc.favoriteAdd(body)
      .subscribe((res:any)=>{
          this.messageAlert=res.description //respuesta dela peticion
          this.responseFavorite=true //Termina la peticion
          this.errorFavorite=false //No hay un error 
          setTimeout(()=>{
            this.responseFavorite=false
          },2000)
          
      },
      (error)=>{
        this.messageAlert='Ya es uno de tus favoritos'
        this.responseFavorite=true
        this.errorFavorite=true

        setTimeout(()=>{
            this.responseFavorite=false
          },2000)
      })
    
  }


  deleteFavorito(id:Number)
  {
    this.midasoftSvc.deleteFavorito(id)
     .subscribe((res)=>{
        console.log(res);
     })
    
  }

}

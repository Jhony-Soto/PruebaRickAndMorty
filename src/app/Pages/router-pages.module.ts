import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';


// componenetes
import {EpisodiosComponent} from './episodios/episodios.component'
import {PersonajesComponent} from './personajes/personajes.component'
import {FavoritosComponent} from './favoritos/favoritos.component'

const routesdashboard:Routes=[
  { path:'',
    children:[
      {path:'',redirectTo:'episodios'},
      {path:'episodios',component:EpisodiosComponent},
      {path:'personajes',component:PersonajesComponent},
      {path:'favoritos',component:FavoritosComponent},
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesdashboard)
  ],
  exports:[
    RouterModule
  ]
})
export class RouterPagesModule { }

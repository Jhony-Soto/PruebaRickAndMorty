import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';


// componenetes
import {EpisodiosComponent} from './episodios/episodios.component'
import {PersonajesComponent} from './personajes/personajes.component'
import {FavoritosComponent} from './favoritos/favoritos.component'

import {AuthGuard } from './guards/auth.guard'

const routesdashboard:Routes=[
  { path:'',
    canActivate:[AuthGuard],
    children:[
      {path:'',redirectTo:'episodios'},
      {path:'episodios',component:EpisodiosComponent},
      {path:'personajes/:id',component:PersonajesComponent},
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

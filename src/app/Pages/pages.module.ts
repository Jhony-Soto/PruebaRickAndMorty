import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodiosComponent } from '../Pages/episodios/episodios.component';
import { PersonajesComponent } from '../Pages/personajes/personajes.component';
import { FavoritosComponent } from '../Pages/favoritos/favoritos.component';


import { RouterPagesModule } from './router-pages.module';
import { NavbarComponent } from '../component/navbar/navbar.component';



@NgModule({
  declarations: [
    EpisodiosComponent, 
    PersonajesComponent, 
    FavoritosComponent, 
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterPagesModule,
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { EpisodiosComponent } from '../Pages/episodios/episodios.component';
import { PersonajesComponent } from '../Pages/personajes/personajes.component';
import { FavoritosComponent } from '../Pages/favoritos/favoritos.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { TablaComponent } from '../component/Tabla/tabla.component';


import { RouterPagesModule } from './router-pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../component/card/card.component';



@NgModule({
  declarations: [
    EpisodiosComponent, 
    PersonajesComponent, 
    FavoritosComponent, 
    NavbarComponent, 
    TablaComponent, CardComponent
  ],
  imports: [
    CommonModule,
    RouterPagesModule,
    NgbModule
  ]
})
export class PagesModule { }

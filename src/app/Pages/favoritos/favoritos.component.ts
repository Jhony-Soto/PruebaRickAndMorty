import { Component, OnInit } from '@angular/core';

import { MidasoftService } from 'src/app/services/midasoft.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styles: [
  ]
})
export class FavoritosComponent implements OnInit {

  favoritos:any;

  constructor(
    private midasoftSvc:MidasoftService
  ) { 

    this.midasoftSvc.favoritesAll()
      .subscribe((res:any)=>{
          this.favoritos=res
          console.log(this.favoritos);
      })

  }

  ngOnInit(): void {
  }

}

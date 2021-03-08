import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';


import {RickAndmortyService} from '../../services/rick-andmorty.service'

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styles: [
  ]
})
export class EpisodiosComponent implements OnInit {

  episodes:[]; 
  paginate:{}
  paginas:any;

  constructor(private rickSvc:RickAndmortyService,
              private router:Router
    ) {

    this.rickSvc.getEpisodios('episode')
      .subscribe((res:any)=>{
        this.episodes=res.results
        this.paginate=res.info
        console.log(this.paginate);
        this.paginas=Array(this.paginate['pages'])
        
      })

   }

  ngOnInit(): void {
  }


  VerPersonajes(idEpisode:number)
  {
    this.router.navigate([`/dashboard/personajes`,idEpisode])
  }


}

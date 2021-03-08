import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() episodes:any;
  @Output() verPersonajes=new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {    
  }

  personajesByepisodio(id:number)
  {
      this.verPersonajes.emit(id)
  }

}

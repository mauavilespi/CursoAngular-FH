import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  //! Siempre se va a recibir
  @Input({required: true})
  public gif!:   Gif;

  //! Se ejecuta cuando se está inicializando el componente
  ngOnInit(): void {

    if (!this.gif) throw new Error( 'Gif property is required' )

  }
}

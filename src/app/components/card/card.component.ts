import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
@Input() nombre: string;
@Input() telefono: string;
@Input() email: string;

@Output() editarContacto: EventEmitter<string>;
  constructor(){

    this.email = '';
    this.nombre = '';
    this.telefono = '';

    this.editarContacto = new EventEmitter();
  }

  
  ngOnInit() {
    console.log
  }

  onClick(){
    this.editarContacto.emit(this.nombre);
  }

}

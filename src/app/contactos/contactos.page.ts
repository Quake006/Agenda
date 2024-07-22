import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  arr: string[];
  constructor() {

    this.arr=['Mario', 'Laura', 'Rocío', 'Manuel']
   }

  ngOnInit() {
    
  }

  pulsarNombre(contacto: any){
console.log(contacto);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  arr: string[];
  constructor(
    private router:Router
  ) {
    
    this.arr=['Mario', 'Laura', 'Rocío', 'Manuel']
   }

  ngOnInit() {
    console.log('[ngOnInit] contactos');
  }
 // Ciclo de Vida
  // ionViewWillEnter() {
  //   console.log('[ionViewWillEnter] contactos');
  // }

  // ionViewDidEnter() {
  //   console.log('[ionViewDidEnter] contactos');
  // }

  // ionViewWillLeave() {
  //   console.log('[ionViewWillLeave] contactos');
  // }

  // ionViewDidLeave() {
  //   console.log('[ionViewDidLeave] contactos');
  // }




  pulsarNombre(contacto: any){
console.log(contacto);
  }

  
//Acciones previas a la navegación
  navegarMapa(){
this.router.navigate(['/mapa']);

  }

}

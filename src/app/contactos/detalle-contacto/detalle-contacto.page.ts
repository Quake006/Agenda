import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
})
export class DetalleContactoPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
    console.log
  }
  onClickVolver(){
    this.navController.navigateBack('/contactos/listado');
    // this.navController.pop
  }
}

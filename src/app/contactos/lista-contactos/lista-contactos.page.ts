import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { InfoComponent } from 'src/app/modals/info/info.component';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {

  constructor(
    private navController: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log
  }
  onClickDetalle(){
    this.navController.navigateForward("/contactos/detalle-contacto");
  }

  onOpenModal(){
    this.modalController.create({
      component: InfoComponent,
      componentProps:{
        nombre: 'Laura',
        telefono: '654123789',
        email:'laura@gmail.com'
      }
    }).then(modal => {
      modal.present();    
      return modal.onDidDismiss();
    }).then(result => {
      console.log(result);
    })

  }
  
}

import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent  implements OnInit {

  @Input() nombre!: string;
  @Input() telefono!: string;
  @Input() email!: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log
  }
  OnClickCerrar(){
    this.modalController.dismiss({
      mensaje:'Cierra el Modal'
    }, 'close');
  }
}

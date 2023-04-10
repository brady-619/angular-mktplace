import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor( private route: Router,  public alertController: AlertController,private menu:MenuController) {}


  cliente:any;


  ionViewWillEnter(){
    this.cliente = localStorage.getItem("cliente")

  }


  miperfil(){
    this.menu.toggle()
    this.route.navigate(['/perfil']);


  }



 async salir(){


  localStorage.setItem("cliente","")

  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Sesión cerrada con éxito',
    // message: 'This is an alert!',
    buttons: ['OK'],
  });

  await alert.present();



 }

  
}

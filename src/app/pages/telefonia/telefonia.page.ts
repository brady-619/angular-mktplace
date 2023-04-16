import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';

import { Router } from '@angular/router';
@Component({
  selector: 'app-telefonia',
  templateUrl: './telefonia.page.html',
  styleUrls: ['./telefonia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TelefoniaPage implements OnInit {
  route: any;

  constructor(private router: Router,private menu:MenuController,public alertController: AlertController) { }

  ngOnInit() {
  }

  miperfil(){
    this.menu.toggle()
    this.router.navigate(['/perfil']);


  }

  async salir(){


    localStorage.setItem("id_cliente","")
    localStorage.setItem("cliente","")
  
    
    this.menu.toggle()
  
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Sesión cerrada con éxito',
      // message: 'This is an alert!',
      buttons: ['OK'],
    });
  
    await alert.present();
  
  
  
   }


}

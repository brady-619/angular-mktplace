import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor( public alertController: AlertController,private menu:MenuController, private route: Router, private menuCtrl: MenuController  ) {}

  ngOnInit() {}

  open:any



  toogleMenu(){
    this.menuCtrl.toggle();

  }


  miperfil(){
    this.menu.toggle()
    this.route.navigate(['/perfil']);


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


  window.location.reload();

  localStorage.removeItem("ingresado");

 }


 buscar(){
  console.log("abre")
  this.open=true


 }

 cerrar(){
  console.log("cierra")
  this.open=false


 }

}

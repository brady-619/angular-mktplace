import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';
import { GetMktProductosService } from '../../services/get-mkt-productos.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor( private route: Router,  public alertController: AlertController,private menu:MenuController, private getProductos: GetMktProductosService   ) {}


  cliente:any;
  id_cliente:any;


  async ionViewWillEnter(){
    this.cliente = localStorage.getItem("cliente")
    this.id_cliente = localStorage.getItem("id_cliente")

    console.log("id", this.id_cliente)






   


    await this.getProductos.GetMktProductos().then(async respuesta => {
      console.log(respuesta);
    });
    






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



 }

  
}

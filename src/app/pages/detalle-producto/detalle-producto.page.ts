import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GetMktDetalleProductoService  } from '../../services/get-mkt-detalle-producto.service';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element';

import Swiper, { Autoplay } from 'swiper';




const swiper = new Swiper(".gallery", {
    modules: [Autoplay],
    loop: true,
    autoplay: {
        delay: 3000,
        }
});


register();
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})






export class DetalleProductoPage implements OnInit {


  currentWindowWidth:any;
  data:any;
cantidad:any;
  swiperModules = [IonicSlides];
  cliente:any;
  botones:any;
  
  slides = {title: "Lorem ipsum", time: 1000}







  constructor(private GetDetalleProducto: GetMktDetalleProductoService,private router: Router,private menu:MenuController,public alertController: AlertController) { }

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  


  async ionViewWillEnter(){



    if(localStorage.getItem("ingresado")!='si'  ){
      this.cliente='';
      this.botones='0'
      console.log("no")
    }
    else{
      this.cliente = localStorage.getItem("cliente")
      this.botones='1'
      console.log("si")
    }


    console.log("cnte", this.cliente)


    //telefonia
    let params = {
      idmkt_productos: localStorage.getItem("idmkt_productos")
    }

    // console.log(params)

    await this.GetDetalleProducto.GetMktProductoDetalle(params).then(async respuesta => {
      console.log(respuesta);

      this.data = respuesta.data;

    });


  }


  home(){
    this.router.navigate(['/home']);
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
  
    this.router.navigate(['/home']);

    localStorage.removeItem("ingresado");
  
   }


   
  
   telefonia(){
  
    
    this.router.navigate(['/telefonia']);
   }

   



   agregar(cantidad:any){
    console.log("can", cantidad)

   }

   comprar(cantidad:any){
    console.log("can", cantidad)

   }



   inicia(){
    
    this.router.navigate(['/perfil']);
    
   }


}

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


import { InsertVentaCarritoService  } from '../../services/insert-venta-carrito.service';


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
  idmkt_productos:any;
  slides = {title: "Lorem ipsum", time: 1000}

  id_cliente:any;





  constructor(private GetDetalleProducto: GetMktDetalleProductoService,private router: Router,private menu:MenuController,public alertController: AlertController, private InsertVentaCarrito: InsertVentaCarritoService) { }

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  


  async ionViewWillEnter(){

    localStorage.removeItem("cantidad")
    this.cantidad=0;

    this.id_cliente= localStorage.getItem("id_cliente")



    if(localStorage.getItem("ingresado")!='si'  ){
      this.cliente='';
      this.botones='0'
      // console.log("no")
    }
    else{
      this.cliente = localStorage.getItem("cliente")
      this.botones='1'
      // console.log("si")
    }


    // console.log("cnte", this.cliente)


    //telefonia
    let params = {
      idmkt_productos: localStorage.getItem("idmkt_productos")
    }

    // console.log(params)

    await this.GetDetalleProducto.GetMktProductoDetalle(params).then(async respuesta => {
      // console.log(respuesta);

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



    await localStorage.setItem("id_cliente","")
    await localStorage.setItem("cliente","")
    await localStorage.removeItem("ingresado");
     
     this.menu.toggle()
   
     const alert = await this.alertController.create({
       header: 'Alert',
       subHeader: 'Sesión cerrada con éxito',
       // message: 'This is an alert!',
       buttons: ['OK'],
     });
   
 
 
     await alert.present();
 
  
   
     // setTimeout(() => {
     //   this.router.navigate(['/home'])
     // }, 4000);
 
   
     this.router.navigate(['home'])
     .then(() => {
       window.location.reload();
     });
    
  
   }


   
  
   telefonia(){
  
    
    this.router.navigate(['/telefonia']);
   }

   



   async agregar(cantidad:any, idmkt_productos:any, precio:any){
    // console.log("can", cantidad, idmkt_productos, precio)


    let total= Number(precio)* Number(cantidad)



    if(cantidad>=1){

      // borrar
    localStorage.setItem("cantidad",cantidad )
//  this.router.navigate(['/telefonia']);

// armando params
 let params = {
  data: [{cliente: this.id_cliente, idmkt_productos: idmkt_productos, cantidad: cantidad, precio:precio , total: total }]
}


// agrega a carrito
await this.InsertVentaCarrito.InsertVentaCarrito(params).then(async respuesta => {
  // console.log(respuesta);

  if (respuesta.status = "000") {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Agregado al carrito con éxito',
      // message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
    

this.router.navigate(['/telefonia'])



  } else {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Error al agregar a carrito',
      // message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();

  }


});



















    }
    else{


      const alert = await this.alertController.create({
        header: 'Aviso',
        subHeader: 'Favor de escoger cantidad',
        // message: 'This is an alert!',
        buttons: ['OK'],
      });
    
      await alert.present();



    }










   }

   async comprar(cantidad:any, idmkt_productos:any,precio:any ){
    // console.log("can", cantidad, idmkt_productos, precio)


    let total= Number(precio)* Number(cantidad)



    if(cantidad>=1){

      // borrar
    localStorage.setItem("cantidad",cantidad )
//  this.router.navigate(['/telefonia']);

// armando params
 let params = {
  data: [{cliente: this.id_cliente, idmkt_productos: idmkt_productos, cantidad: cantidad, precio:precio , total: total }]
}


// agrega a carrito
await this.InsertVentaCarrito.InsertVentaCarrito(params).then(async respuesta => {
  // console.log(respuesta);

  if (respuesta.status = "000") {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Agregado al carrito con éxito',
      // message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
    

this.router.navigate(['/carrito'])



  } else {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Error al agregar a carrito',
      // message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();

  }


});



















    }
    else{


      const alert = await this.alertController.create({
        header: 'Aviso',
        subHeader: 'Favor de escoger cantidad',
        // message: 'This is an alert!',
        buttons: ['OK'],
      });
    
      await alert.present();



    }












   }



   inicia(){
    
    this.router.navigate(['/perfil']);
    
   }


   carrito(){

  
    this.router.navigate(['/carrito']);
   }
   


}

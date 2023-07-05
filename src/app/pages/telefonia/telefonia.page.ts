import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';

import { Router } from '@angular/router';


import { register } from 'swiper/element/bundle';

import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';


import { GetMktProductosCategoriaService } from '../../services/get-mkt-productos-categoria.service';

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
  },
pagination: {
 el: '.swiper-pagination',
 clickable: true,
 },
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});







register();
@Component({
  selector: 'app-telefonia',
  templateUrl: './telefonia.page.html',
  styleUrls: ['./telefonia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class TelefoniaPage implements OnInit {
  route: any;

  swiperModules = [IonicSlides];

  data:any;
  currentWindowWidth:any;
  cliente: any;
  botones: any;

  constructor(private router: Router,private menu:MenuController,public alertController: AlertController, private getMktProductos:GetMktProductosCategoriaService) { }

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }



  async ionViewWillEnter(){

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

    // localStorage.getItem("idmkt_productos")
    // console.log(localStorage.getItem("idmkt_productos"))

// set inicializado
    localStorage.setItem("idmkt_productos",'');


    //telefonia
    let params = {
      categoria: "1"
    }

    await this.getMktProductos.GetMktProductosCategoria(params).then(async respuesta => {
      // console.log(respuesta);

       this.data= respuesta.data;

    
    
    });
    

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



   home(){
    // this.router.navigate(['/home']);


    this.router.navigate(['home'])
    .then(() => {
      window.location.reload();
    });
   

   }
  
  
   telefonia(){
  
    
    this.router.navigate(['/telefonia']);

    
   }



   detalle(idmkt_productos:any){

    /*set*/
    // console.log("iddetalle", idmkt_productos)
    localStorage.setItem("idmkt_productos",idmkt_productos);


    // console.log(localStorage.getItem("idmkt_productos"))
    
    this.router.navigate(['/detalle-producto']);


   }


   carrito(){

  
    this.router.navigate(['/carrito']);
   }
   


}

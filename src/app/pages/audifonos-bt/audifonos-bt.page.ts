import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { GetMktProductosCategoriaService } from 'src/app/services/get-mkt-productos-categoria.service';
import { GetPreciosMayorMenorService } from '../../services/get-precios-mayor-menor.service';
import { GetPreciosMenorMayorService } from '../../services/get-precios-menor-mayor.service';
import { IonicSlides } from '@ionic/angular';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

import { IonContent } from '@ionic/angular';
// import { register } from 'swiper/element';

import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();


@Component({
  selector: 'app-audifonos-bt',
  templateUrl: './audifonos-bt.page.html',
  styleUrls: ['./audifonos-bt.page.scss'],
  standalone: true,
  imports: [IonicModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,CommonModule,ComponentsModule,FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})








export class AudifonosBtPage implements OnInit {




  constructor(private router: Router,private getMktProductos:GetMktProductosCategoriaService, private getProductosMayMen: GetPreciosMayorMenorService , private getProductosMenMay: GetPreciosMenorMayorService) { }



  swiperSlideChanged(e:any){
    // console.log('chan',e)
  }



  ionicScrollDelegate:any
  data:any;
  currentWindowWidth:any;
  cliente: any;
  botones: any;
  bandera:boolean =false

  // cambio
  categoria =1;

  estadomenu: boolean = false;

  @ViewChild(IonContent)
  content!: IonContent;


  




  swiperModules = [IonicSlides];
  


  slides = {title: "Lorem ipsum", time: 1000}




  ngOnInit() {


    
    
  }



  async ionViewWillEnter(){


    // localStorage.getItem("idmkt_productos")
    // console.log(localStorage.getItem("idmkt_productos"))

// set inicializado
    localStorage.setItem("idmkt_productos",'');


    //telefonia
    let params = {
      categoria: this.categoria
    }

    await this.getMktProductos.GetMktProductosCategoria(params).then(async respuesta => {
      // console.log(respuesta);

       this.data= respuesta.data;

    
    
    });
    

  }



  subir(){
    // console.log("sube")
 
    this.content.scrollToTop(400);
  }




  abremenu(){
    // console.log("abre menu", this.estadomenu)

    this.estadomenu=true;

  }

  cierramenu(){
    // console.log("cierra menu", this.estadomenu)

    this.estadomenu=false;


  }


  ordaz(){
    // console.log("az")
  }

  ordza(){

    // console.log("za")
  }


  async ordmaymen(){
    // console.log("maymen")


        //telefonia
        let params = {
          categoria: this.categoria
        }

  await this.getProductosMayMen.GetProductosMayorMenor(params).then(async respuesta => {
      // console.log(respuesta);

       this.data= respuesta.data;
       this.estadomenu=false;
    
    
    });
    




  }



  async ordmenmay(){
    // console.log("menmay")


        //telefonia
        let params = {
          categoria: this.categoria
        }

  await this.getProductosMenMay.GetProductosMenorMayor(params).then(async respuesta => {
      // console.log(respuesta);

       this.data= respuesta.data;
       this.estadomenu=false;
    
    
    });
    



  }



  detalle(idmkt_productos:any, categoria:any){

    // console.log(idmkt_productos)




    this.router.navigate(['/ver-detalle/'+idmkt_productos+'/'+categoria]);



  }





}

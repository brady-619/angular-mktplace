import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { GetEstatusPedidosService } from 'src/app/services/get-estatus-pedidos.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.page.html',
  styleUrls: ['./mis-pedidos.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MisPedidosPage implements OnInit {

  constructor(private getEstatusPedidos:GetEstatusPedidosService) { }

  // ESATUS DE ENVIO
  // 1 PREPARANDO ENVIO
  // 2 EN RUTA
  // 3 ENTREGADO

  estadomenu:any;
  id_cliente:any;
  data:any;
  guia:any;

  estatus:any;

  ngOnInit() {
  }


  async ionViewWillEnter(){

    this.id_cliente = localStorage.getItem('id_cliente');




    let params = {

          estatus_envio: "PREPARANDO ENVIO",
          id_cliente: this.id_cliente

    };


  await this.getEstatusPedidos.GetEstatusPedido(params).then(async respuesta => {
      // console.log(respuesta);

       this.data= respuesta.data;
       this.guia=false
    
    
    });

  }




  abremenu(){
    // console.log("abre menu", this.estadomenu)

    this.estadomenu=true;

  }

  cierramenu(){
    // console.log("cierra menu", this.estadomenu)

    this.estadomenu=false;


  }

  async ordmaymen(){
    // console.log("maymen")


        //telefonia
  //       let params = {
  //         categoria: this.categoria
  //       }

  // await this.getProductosMayMen.GetProductosMayorMenor(params).then(async respuesta => {
  //     console.log(respuesta);

  //      this.data= respuesta.data;
  //      this.estadomenu=false;
    
    
  //   });
    




  }



  async ordmenmay(){
    // console.log("menmay")


        //telefonia
  //       let params = {
  //         categoria: this.categoria
  //       }

  // await this.getProductosMenMay.GetProductosMenorMayor(params).then(async respuesta => {
  //     console.log(respuesta);

  //      this.data= respuesta.data;
  //      this.estadomenu=false;
    
    
  //   });
    



  }


  async cambio(){
    // console.log("cambia",this.estatus)





    


    if(this.estatus==='EN RUTA'){

      let params = {

        estatus_envio: "EN RUTA",
        id_cliente: this.id_cliente

  };


await this.getEstatusPedidos.GetEstatusPedido(params).then(async respuesta => {
    // console.log(respuesta);

     this.data= respuesta.data;
     this.guia=true
  
  
  });

    }
    else if(this.estatus==='ENTREGADO'){

      let params = {

        estatus_envio: "ENTREGADO",
        id_cliente: this.id_cliente

  };


await this.getEstatusPedidos.GetEstatusPedido(params).then(async respuesta => {
    // console.log(respuesta);

     this.data= respuesta.data;
     this.guia=true
  
  
  });

    }
    else{
      this.ionViewWillEnter();
    }





  }


}

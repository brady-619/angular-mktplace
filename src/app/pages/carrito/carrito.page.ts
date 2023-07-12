import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonicModule, MenuController } from '@ionic/angular';
import { GetProductosCarritoService } from '../../services/get-productos-carrito.service';
import { Router } from '@angular/router';


import { NgxPayPalModule } from 'ngx-paypal';

import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { GetMktDetalleProductoService } from 'src/app/services/get-mkt-detalle-producto.service';
import { InsertVentaCarritoService } from 'src/app/services/insert-venta-carrito.service';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { DeleteProductoCarritoService } from 'src/app/services/delete-producto-carrito.service';

import { UpdateCantidadTotalService } from 'src/app/services/update-cantidad-total.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,CommonModule,ComponentsModule,FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class CarritoPage implements OnInit {
  constructor(
    private GetDetalleProducto: GetMktDetalleProductoService,
    private router: Router,
    private menu: MenuController,
    public alertController: AlertController,
    private InsertVentaCarrito: InsertVentaCarritoService,
    private getProductosCarrito: GetProductosCarritoService,
    private deleteProductoCarrito: DeleteProductoCarritoService,
    private updateCantidadCarrito: UpdateCantidadTotalService,
    public alertCtrl: AlertController,
  ) {}


  id_cliente:any;
  totales:any;
  data:any;
  totales_coma:any;
  cantidad:any;
  filterValue:any;

  totales_descuento=0;

  totales_final:any;
  c_envio=0


  @ViewChild(IonContent)
  content!: IonContent;

  ngOnInit() {}


  async ionViewWillEnter() {



localStorage.removeItem('totales_final')


    this.totales = 0;

    // set inicializado
    // this.id_cliente = localStorage.getItem('id_cliente');


   this.id_cliente= localStorage.getItem('id_cliente')

    //telefonia
    let params = {
      cliente: this.id_cliente,
    };

    // console.log(this.id_cliente)


    if(this.id_cliente==false || this.id_cliente==null  ){

  this.router.navigate(['/login']);
    }


    else{

    await this.getProductosCarrito
      .GetProductosCarrito(params)
      .then(async (respuesta) => {
        // console.log(respuesta);

        this.data = respuesta.data;

        // console.log(this.data);

        this.cantidad=this.data.cantidad



        this.data.forEach((item: any) => {
          // console.log(item);
          this.totales = this.totales + Number(item.total);

          this.totales_coma = new Intl.NumberFormat('es-MX').format(
            this.totales

            

          );
        });
    localStorage.setItem('totales_final',this.totales)
        
        // console.log(this.totales);


      });}


      this.totales>=500? this.c_envio=0:this.c_envio=80


      
  }


 async  menos(idmkt_carrito:any,cantidad:any,precio:any){
    // console.log("menos",cantidad)
    // console.log("idmkt_carrito",idmkt_carrito)


let contador=cantidad;

    if(cantidad>1){  

      contador--;

      let total= ( contador * precio)
  
      // console.log(total)
          let params = {
            data: [{ cantidad: contador, total:total, idmkt_carrito: idmkt_carrito }],
          };
      
  
  
      await this.updateCantidadCarrito.UpdateCantidadTotal(params).then(async (resp) => {
          // console.log(resp);

          this.ionViewWillEnter();
  
         
        });


        

      
      
    }



  }


  async mas(idmkt_carrito:any,cantidad:number,precio:any){
    // console.log("mas",cantidad)
    // console.log("idmkt_carrito",idmkt_carrito)


let contador=cantidad;

    if(cantidad<9){  

      contador++;

      let total= ( contador * precio)
  
      // console.log(total)
          let params = {
            data: [{ cantidad: contador, total:total, idmkt_carrito: idmkt_carrito }],
          };
      
  
  
      await this.updateCantidadCarrito.UpdateCantidadTotal(params).then(async (resp) => {
          // console.log(resp);

          this.ionViewWillEnter();



  
         
        });


        

      
      
    }




    

   

}




async applyFilter(event: Event) {

  this.filterValue = (event.target as HTMLInputElement).value;




  this.filterValue = this.filterValue.trim().toLowerCase();
// console.log(this.filterValue);

  // console.log(this.filterValue)



  if(this.filterValue=='junio202340'){
    //  console.log("aplica descuento")



    this.totales_descuento= Number((this.totales*.40).toFixed(2))




    this.totales_final= this.totales-this.totales_descuento;
    // console.log(this.totales_final)
    this.totales_final>=500? this.c_envio=0:this.c_envio=80


this.totales_final=this.totales_final+this.c_envio


    localStorage.setItem('totales_final',this.totales_final)

  }
  else{
    // console.log("no aplica descuento")

    this.totales_final= this.totales;
    this.totales_descuento=0;
    // console.log(this.totales_final)
    this.totales_final>=500? this.c_envio=0:this.c_envio=80

    

    this.totales_final=this.totales_final+this.c_envio


    localStorage.setItem('totales_final',this.totales_final)

  }




 
      
  

}


async borrar(idmkt_carrito: any, producto: any) {
  // console.log('id a borrar', idmkt_carrito, producto);

  const alert = await this.alertCtrl.create({
    header: 'AVISO, seguro que deseas eliminar el producto: ' + producto,
    // subHeader: 'ICC:' +  sims  + '   al P.V:'  + this.pv,
    // message: '<b>el producto:</b><br/>' + producto + '   <br/>',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          // console.log('Confirm Cancel');
        },
      },
      {
        text: 'Ok',
        // handler: (alertData) => { //takes the data
        //     console.log(alertData.name1);
        // }
        handler: async (alertData) => {
          // console.log('Se manda asigna la venta');

          // console.log("Sim:", ICCI);

          let params = {
            data: [{ idmkt_carrito: idmkt_carrito }],
          };

          await this.deleteProductoCarrito.DeleteProductoCarrito(params).then(async (resp) => {
              // console.log(resp);

              const alert = await this.alertCtrl.create({
                header: 'Producto eliminado con éxito.',
                // subHeader: 'SubTitle',
                // message: 'This is an alert message',
                buttons: ['OK'],
              });
              await alert.present();






            setTimeout(() => {

             
                window.location.reload();
           

            }, 4000);

            
            })
            .catch(async (error) => {
              /* Código a realizar cuando se rechaza la promesa */
              // console.log('NO paso chido', error);

              const alert = await this.alertCtrl.create({
                header: 'Error en red.',
                // subHeader: 'SubTitle',
                // message: 'This is an alert message',
                buttons: ['OK'],
              });
              await alert.present();
            });
        },
      },
    ],
  });

  await alert.present();
}




envio(){

  
// console.log(localStorage.getItem('totales_final'))
  
   this.router.navigate(['/envio']);



}




subir(){
  // console.log("sube")

  this.content.scrollToTop(400);
}


}
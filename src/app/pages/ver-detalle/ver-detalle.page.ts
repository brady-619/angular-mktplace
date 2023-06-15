import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonicModule, MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMktDetalleProductoService } from 'src/app/services/get-mkt-detalle-producto.service';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { GetMktProductosCategoriaService } from 'src/app/services/get-mkt-productos-categoria.service';

import { register } from 'swiper/element/bundle';
import { InsertVentaCarritoService } from 'src/app/services/insert-venta-carrito.service';

register();


@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.page.html',
  styleUrls: ['./ver-detalle.page.scss'],
  standalone: true,
  imports: [IonicModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,CommonModule,ComponentsModule,FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class VerDetallePage implements OnInit {



  constructor(private router: Router, private route: ActivatedRoute,private GetDetalleProducto: GetMktDetalleProductoService,private getMktProductos:GetMktProductosCategoriaService,
    

 
    private menu: MenuController,
    public alertController: AlertController,
    private InsertVentaCarrito: InsertVentaCarritoService
    
    ) { }


  data:any;
  productos_relacionados:any;
  imagen_cambiada:any | null;
  zoomeada:any;
  cantidad=1;

  id_cliente=1;

  @ViewChild(IonContent)
  content!: IonContent;


  ngOnInit() {
  }

  async ionViewWillEnter() {
    let idmkt_productos = this.route.snapshot.paramMap.get('idmkt_productos');




    let categoria = this.route.snapshot.paramMap.get('categoria');

        //telefonia
        let params = {
          idmkt_productos: idmkt_productos
        }

    // console.log( "charco",idmkt_productos)
    // traer servicio con su infodata

    await this.GetDetalleProducto.GetMktProductoDetalle(params).then(async respuesta => {
      console.log(respuesta);

      this.data = respuesta.data;

    });



     //telefonia
     let request = {
      categoria: categoria
    }

    await this.getMktProductos.GetMktProductosCategoria(request).then(async respuesta => {
      console.log(respuesta);

       this.productos_relacionados= respuesta.data;

    
    
    });







  }


  subir(){
    console.log("sube")
 
    this.content.scrollToTop(400);
  }


  detalle(idmkt_productos:any, categoria:any){

    console.log(idmkt_productos)




    this.router.navigate(['/ver-detalle/'+idmkt_productos+'/'+categoria]);



  }


  cambio(imagen:any){

    // console.log("zoom", imagen)

   this.imagen_cambiada=imagen
  //  console.log("zoom", this.imagen_cambiada)
  }



  zoom(imagen:any){
    // console.log("zoomeada", imagen)

  this.zoomeada=true;




  }



  cerrarzoom(){
    this.zoomeada=false;
  }



  menos(){
    console.log("menos")

    if(this.cantidad>1){
    this.cantidad= this.cantidad-1
}
  }


  mas(){
    console.log("mas")


    if(this.cantidad<9){
      this.cantidad= this.cantidad+1
  }
 

  }






  

  async agregar(cantidad: any, idmkt_productos: any, precio: any) {












    
    console.log('can', cantidad, idmkt_productos, precio);

    let total = Number(precio) * Number(cantidad);





    

    if (cantidad >= 1) {
      // armando params
      let params = {
        data: [
          {
            cliente: this.id_cliente,
            idmkt_productos: idmkt_productos,
            cantidad: cantidad,
            precio: precio,
            total: total,
          },
        ],
      };

      // agrega a carrito
      await this.InsertVentaCarrito.InsertVentaCarrito(params).then(
        async (respuesta) => {
          console.log(respuesta);

          if ((respuesta.status = '000')) {
            const alert = await this.alertController.create({
              header: 'Aviso',
              subHeader: 'Agregado al carrito con éxito',
              // message: 'This is an alert!',
              buttons: ['OK'],
            });

            await alert.present();

            this.router.navigate(['/home']);
          } else {
            const alert = await this.alertController.create({
              header: 'Aviso',
              subHeader: 'Error al agregar a carrito',
              // message: 'This is an alert!',
              buttons: ['OK'],
            });

            await alert.present();
          }
        }
      );
    } else {
      const alert = await this.alertController.create({
        header: 'Aviso',
        subHeader: 'Favor de escoger cantidad',
        // message: 'This is an alert!',
        buttons: ['OK'],
      });

      await alert.present();
    }
  



  



}

comprar(cantidad:any,idmkt_productos:any){
  console.log("carrito", cantidad, idmkt_productos)


}





}

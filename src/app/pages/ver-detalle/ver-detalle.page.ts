import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMktDetalleProductoService } from 'src/app/services/get-mkt-detalle-producto.service';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { GetMktProductosCategoriaService } from 'src/app/services/get-mkt-productos-categoria.service';

import { register } from 'swiper/element/bundle';

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



  constructor(private router: Router, private route: ActivatedRoute,private GetDetalleProducto: GetMktDetalleProductoService,private getMktProductos:GetMktProductosCategoriaService,) { }


  data:any;
  productos_relacionados:any;

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



}

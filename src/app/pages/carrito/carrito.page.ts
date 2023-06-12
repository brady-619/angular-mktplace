import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';
import { GetProductosCarritoService } from '../../services/get-productos-carrito.service';
import { Router } from '@angular/router';
import { DeleteProductoCarritoService } from '../../services/delete-producto-carrito.service';

import { NgxPayPalModule } from 'ngx-paypal';

import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { GetMktDetalleProductoService } from 'src/app/services/get-mkt-detalle-producto.service';
import { InsertVentaCarritoService } from 'src/app/services/insert-venta-carrito.service';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';

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
  ) {}


  id_cliente=1;
  totales:any;
  data:any;
  totales_coma:any;

  ngOnInit() {}


  async ionViewWillEnter() {
    this.totales = 0;

    // set inicializado
    // this.id_cliente = localStorage.getItem('id_cliente');

    //telefonia
    let params = {
      cliente: this.id_cliente,
    };

    await this.getProductosCarrito
      .GetProductosCarrito(params)
      .then(async (respuesta) => {
        // console.log(respuesta);

        this.data = respuesta.data;

        console.log(this.data);

        this.data.forEach((item: any) => {
          // console.log(item);
          this.totales = this.totales + Number(item.total);

          this.totales_coma = new Intl.NumberFormat('es-MX').format(
            this.totales
          );
        });

        // console.log(this.totales);


      });
  }

}
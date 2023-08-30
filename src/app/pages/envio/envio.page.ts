import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { InsertLogVentaService } from 'src/app/services/insert-log-venta.service';

import { UpdatePagadoCarritoService } from 'src/app/services/update-pagado-carrito.service';
import { ComponentsModule } from 'src/app/components.module';
import { GetInfoClienteService } from 'src/app/services/get-info-cliente.service';
import { Router } from '@angular/router';
import {
  NgxPayPalModule,
  IPayPalConfig,
  ICreateOrderRequest,
} from 'ngx-paypal';

import { UpdateSaldoPuntosService } from 'src/app/services/update-saldo-puntos.service';
@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
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
    NgxPayPalModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EnvioPage implements OnInit {
  public payPalConfig?: IPayPalConfig;

  constructor(
    private getInfoCliente: GetInfoClienteService,
    private router: Router,
    public alertController: AlertController,
    public alertCtrl: AlertController,
    public updatePagadoCarrito: UpdatePagadoCarritoService,
    public insertLogVenta: InsertLogVentaService, public updateSaldo: UpdateSaldoPuntosService
  ) {}
  data: any;

  nombre: any;
  apellido: any;
  celular: any;
  email: any;
  calle: any;
  numero: any;
  colonia: any;
  alcaldia: any;
  cp: any;
  instrucciones: any;
  estado: any;
  id_cliente: any;

  valido = false;
  orden_paypal: any;

  orden: any;

  showSuccess: any;
  showCancel: any;
  showError: any;
  req_orden: any;
  req_orden_direccion: any;
  req_saldo:any;
  puntos_actualizar:any;
  totales: any;
  puntos_actuales: any;

  ngOnInit() {}

  async ionViewWillEnter() {
    this.id_cliente = localStorage.getItem('id_cliente');

    //total a pagar final
    this.totales = localStorage.getItem('total_pagar');
    //  console.log("nuev",localStorage.getItem('totales_final_nuevo'))
    console.log('Total a cobra', this.totales);

    //total de puntos a actualizar antes de t
    // console.log("puntos fn",localStorage.getItem('puntos_finales'))
    this.puntos_actuales = localStorage.getItem('puntos_finales');

    //calculando puntos finales a cliente %1

    let nuevos_puntos = Math.floor(this.totales * 0.01);
    console.log(nuevos_puntos);

    this.puntos_actualizar =
      Number(nuevos_puntos) + Number(this.puntos_actuales);

    console.log('puntos a actualizar', this.puntos_actualizar);

    this.initConfig(this.totales);

    // console.log(this.id_cliente);

    //telefonia
    let params = {
      idmkt_clientes: this.id_cliente,
    };

    // console.log(params);

    if (this.id_cliente) {
      await this.getInfoCliente
        .GetInfoCliente(params)
        .then(async (respuesta) => {
          // console.log(respuesta);

          this.data = respuesta.data;

          this.nombre = this.data[0].nombre;

          this.apellido = this.data[0].apellido;

          this.celular = this.data[0].celular;

          this.email = this.data[0].email;

          this.calle = this.data[0].calle;
          this.colonia = this.data[0].colonia;

          this.numero = this.data[0].numero;

          this.alcaldia = this.data[0].alcaldia;
          this.cp = this.data[0].cp;
          this.instrucciones = this.data[0].instrucciones;
          this.estado = this.data[0].estado;

          // console.log(this.data);
        });
    } else {
      this.router.navigate(['/login']);
    }
  }

  async initConfig(totales: any) {
    this.payPalConfig = {
      currency: 'MXN',
      // dev
      // clientId: 'Ab5Eqrk-NOVRhy859YUX73ZSctz8CchQat0EjCPNZ0y6IIAMpvynYtUwskzSIjVKrrPHrH1KFvA1vG1K',
      // prod
      clientId:
        'AaHigufqZigAFEhX-2ovqXef5qGcKZ37TkNSVgtwIPvY1j7C898N3lhD-07eA4vwaoOvnkFjrUp9hCge',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'MXN',
                value: totales,
                breakdown: {
                  item_total: {
                    currency_code: 'MXN',
                    value: totales,
                  },
                },
              },
              items: [
                {
                  name: 'Cellular Planet',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'MXN',
                    value: totales,
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        shape: 'pill',
        color: 'gold',
        // layout: 'horizontal',
        // label: 'paypal',
        tagline: false,
        // height: 25,
      },
      onApprove: (data, actions) => {
        // console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(async (details: any) => {
          // console.log('onApprove: ', details);

          this.orden_paypal = details.id;
          // console.log(this.orden_paypal)

          // id de transaccion paypal
          // details.id

          // console.log('onApprove: ', details.status);
          // APPROVED
          if (details.status === 'APPROVED') {
            const alert = await this.alertCtrl.create({
              header: 'Alert',
              subHeader: 'Venta realizada con éxito.',
              // message: 'This is an alert!',
              buttons: ['OK'],
            });

            // se manda el update de carrito

            // console.log('orde');
            const date = new Date();
            // console.log(date.getTime());

            let fecha = date.getTime();
            let cliente = localStorage.getItem('id_cliente');

            this.orden = cliente + '-' + fecha;

            // console.log(this.orden);

            this.req_orden = {
              data: [
                {
                  orden: this.orden,
                  id_cliente: cliente,
                  orden_paypal: this.orden_paypal,
                },
              ],
            };

            // console.log(this.req_orden);
            await this.updatePagadoCarrito
              .UpdatePagadoCarrito(this.req_orden)
              .then(async (respuesta) => {
                //  console.log(respuesta);
              });


console.log("dots",this.puntos_actualizar)






              this.req_saldo = {
                data: [
                  {
                    puntos: this.puntos_actualizar,
                    id_cliente: cliente
                  },
                ],
              };
              // act puntos
              await this.updateSaldo.UpdateSaldoPuntos
              (this.req_saldo)
              .then(async (respuesta) => {
                //  console.log(respuesta);

                localStorage.setItem('puntos_finales', this.puntos_actualizar)
                localStorage.setItem('puntos', this.puntos_actualizar)


              });

            // console.log(this.orden);
            // console.log(localStorage.getItem('id_cliente'));
            //             console.log('pago total', totales);

            //             console.log(localStorage.getItem('calle'));
            //             console.log(localStorage.getItem('numero'));
            //             console.log(localStorage.getItem('colonia'));
            //             console.log(localStorage.getItem('alcaldia'));
            //             console.log(localStorage.getItem('cp'));
            //             console.log(localStorage.getItem('estado'));
            //             console.log(localStorage.getItem('instrucciones'));

            // log de pagos
            let direccion =
              'Calle: ' +
              localStorage.getItem('calle') +
              ' Numero: ' +
              localStorage.getItem('numero') +
              ' Colonia: ' +
              localStorage.getItem('colonia') +
              ' Municipio/Alcaldia: ' +
              localStorage.getItem('alcaldia') +
              ' CP: ' +
              localStorage.getItem('cp') +
              ' Estado: ' +
              localStorage.getItem('estado') +
              ' Instrucciones: ' +
              localStorage.getItem('instrucciones');

            this.req_orden_direccion = {
              data: [
                {
                  orden: this.orden,
                  id_cliente: localStorage.getItem('id_cliente'),
                  pago: totales,
                  direccion: direccion,
                  orden_paypal: this.orden_paypal,
                },
              ],
            };
            // console.log(this.req_orden_direccion)

            await this.insertLogVenta
              .InsertLogVenta(this.req_orden_direccion)
              .then(async (respuesta) => {
                //  console.log(respuesta);
              });

            await alert.present();

            setTimeout(() => {
              this.router.navigate(['home']).then(() => {
                window.location.reload();
              })
            }, 3000);

            // this.router.navigate(['/home']);
          } else {
            const alert = await this.alertCtrl.create({
              header: 'Alert',
              subHeader:
                'Error al realizar el cobro. Favor de validar datos de tarjeta',
              // message: 'This is an alert!',
              buttons: ['OK'],
            });
            await alert.present();
          }
        });
      },
      onClientAuthorization: (data) => {
        // console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        // console.log('OnCancel', data, actions);
        this.showCancel = true;
      },
      onError: (err) => {
        // console.log('OnError', err);
        this.showError = true;
      },
      onClick: (data, actions) => {
        // console.log('onClick', data, actions);
        // console.log('on click');
      },
    };
  }

  editardireccion() {
    this.valido = false;
  }

  async pago(
    nombre: any,
    calle: any,
    numero: any,
    colonia: any,
    alcaldia: any,
    cp: any,
    estado: any,
    instrucciones: any
  ) {
    // console.log(
    //   nombre,
    //   calle,
    //   numero,
    //   colonia,
    //   alcaldia,
    //   cp,
    //   estado,
    //   instrucciones
    // );

    if (
      calle == null ||
      numero == null ||
      colonia == null ||
      alcaldia == null ||
      cp == null ||
      estado == null
    ) {
      // console.log('no pasa');

      const alert = await this.alertCtrl.create({
        header: 'Alert',
        subHeader: 'Favor de ingresar una dirección de envío válida',
        // message: 'This is an alert!',
        buttons: ['OK'],
      });
      await alert.present();
    }

    localStorage.removeItem('calle');
    localStorage.removeItem('numero');
    localStorage.removeItem('colonia');
    localStorage.removeItem('alcaldia');
    localStorage.removeItem('cp');
    localStorage.removeItem('estado');
    localStorage.removeItem('instrucciones');

    if (
      calle.length >= 3 &&
      numero >= 1 &&
      colonia.length >= 3 &&
      alcaldia.length >= 3 &&
      cp.length >= 5 &&
      estado.length >= 3
    ) {
      localStorage.setItem('calle', calle);
      // console.log(localStorage.getItem('calle'))
      localStorage.setItem('numero', numero);
      localStorage.setItem('colonia', colonia);
      localStorage.setItem('alcaldia', alcaldia);
      localStorage.setItem('cp', cp);
      localStorage.setItem('estado', estado);
      localStorage.setItem('instrucciones', instrucciones);

      this.valido = true;
    }
    // if(
    //   calle ==undefined
    // ){
    //   console.log("debe enrt")

    //   this.valido=false

    //   const alert = await this.alertCtrl.create({
    //     header: 'Alert',
    //     subHeader: 'Favor de ingresar una dirección de envío válida',
    //     // message: 'This is an alert!',
    //     buttons: ['OK'],
    //   });
    //   await alert.present();

    // }
    else {
      this.valido = false;

      const alert = await this.alertCtrl.create({
        header: 'Alert',
        subHeader: 'Favor de ingresar una dirección de envío válida',
        // message: 'This is an alert!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}

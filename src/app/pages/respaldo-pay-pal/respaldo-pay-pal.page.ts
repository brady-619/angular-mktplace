import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgxPayPalModule, IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { DeleteProductoCarritoService } from 'src/app/services/delete-producto-carrito.service';
import { GetProductosCarritoService } from 'src/app/services/get-productos-carrito.service';

@Component({
  selector: 'app-respaldo-pay-pal',
  templateUrl: './respaldo-pay-pal.page.html',
  styleUrls: ['./respaldo-pay-pal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgxPayPalModule],
})
export class RespaldoPayPalPage implements OnInit {

  public payPalConfig?: IPayPalConfig;

  currentWindowWidth: any;
  showSuccess: any;
  showCancel: any;
  showError: any;

  constructor(
    private getProductosCarrito: GetProductosCarritoService,
    private router: Router,
    private menu: MenuController,
    public alertController: AlertController,
    public alertCtrl: AlertController,
    private deleteProductoCarrito: DeleteProductoCarritoService
  ) {}

  data: any;
  id_cliente: any;
  total: any;
  totales = 0;
  totales_coma: any;

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  async ionViewWillEnter() {
    this.totales = 0;

    // set inicializado
    this.id_cliente = localStorage.getItem('id_cliente');

    //telefonia
    let params = {
      cliente: this.id_cliente,
    };

    await this.getProductosCarrito
      .GetProductosCarrito(params)
      .then(async (respuesta) => {
        console.log(respuesta);

        this.data = respuesta.data;

        console.log(this.data);

        this.data.forEach((item: any) => {
          console.log(item);
          this.totales = this.totales + Number(item.total);

          this.totales_coma = new Intl.NumberFormat('es-MX').format(
            this.totales
          );
        });

        console.log(this.totales);

        this.initConfig(this.totales);
      });
  }

  initConfig(totales: any) {
    this.payPalConfig = {
      currency: 'MXN',
      clientId:
        'AYKLskE98e7tZ0_h6Mczp8iyyf7MitklAfv6Qbs0bM1hFN7CTrf0TAMVo2IsxAiDzkhh5wK7k3LUAPes',
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
        // label: 'paypal',
        // layout: 'vertical'
        shape: 'pill',
        color: 'gold',
        layout: 'horizontal',
        label: 'paypal',
        tagline: false,
      },
      onApprove: (data, actions) => {
        // console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(async (details: any) => {
          console.log('onApprove: ', details);

          console.log('onApprove: ', details.status);
          // APPROVED
          if (details.status === 'APPROVED') {
            const alert = await this.alertCtrl.create({
              header: 'Alert',
              subHeader: 'Venta realizada con éxito.',
              // message: 'This is an alert!',
              buttons: ['OK'],
            });
            await alert.present();
            this.router.navigate(['/home']);
          } else {
            const alert = await this.alertCtrl.create({
              header: 'Alert',
              subHeader: 'Error al realizar el cobro. Favor de validar datos de tarjeta',
              // message: 'This is an alert!',
              buttons: ['OK'],
            });
            await alert.present();
          }
        });
      },
      // onClientAuthorization: (data) => {
      //     console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      //     this.showSuccess = true;
      // },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.showCancel = true;
      },
      onError: (err) => {
        console.log('OnError', err);
        this.showError = true;
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        console.log('on click');
      },
    };
  }
  home() {
    this.router.navigate(['/home']);
  }

  miperfil() {
    this.menu.toggle();
    this.router.navigate(['/perfil']);
  }

  telefonia() {
    this.router.navigate(['/telefonia']);
  }

  async salir() {
    await localStorage.setItem('id_cliente', '');
    await localStorage.setItem('cliente', '');
    await localStorage.removeItem('ingresado');

    this.menu.toggle();

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

    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }

  async borrar(idmkt_carrito: any, producto: any) {
    console.log('id a borrar', idmkt_carrito, producto);

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
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          // handler: (alertData) => { //takes the data
          //     console.log(alertData.name1);
          // }
          handler: async (alertData) => {
            console.log('Se manda asigna la venta');

            // console.log("Sim:", ICCI);

            let params = {
              data: [{ idmkt_carrito: idmkt_carrito }],
            };

            await this.deleteProductoCarrito.DeleteProductoCarrito(params).then(async (resp) => {
                console.log(resp);

                const alert = await this.alertCtrl.create({
                  header: 'Producto eliminado con éxito.',
                  // subHeader: 'SubTitle',
                  // message: 'This is an alert message',
                  buttons: ['OK'],
                });
                await alert.present();

                this.ionViewWillEnter();
              })
              .catch(async (error) => {
                /* Código a realizar cuando se rechaza la promesa */
                console.log('NO paso chido', error);

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
}

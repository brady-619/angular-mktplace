import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { GetInfoClienteService } from 'src/app/services/get-info-cliente.service';
import { Router } from '@angular/router';
import { NgxPayPalModule, IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
  standalone: true,
  imports: [IonicModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,CommonModule,ComponentsModule,FormsModule,NgxPayPalModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class EnvioPage implements OnInit {

  public payPalConfig?: IPayPalConfig;

  constructor(private getInfoCliente: GetInfoClienteService,    private router: Router,    public alertController: AlertController,
    public alertCtrl: AlertController) { }
  data :any

  nombre:any;
  apellido:any;
  celular:any;
  email:any;
  calle:any;
  numero:any;
  colonia:any;
  alcaldia:any;
  cp:any;
  instrucciones:any;
  estado:any;
  id_cliente:any;


  showSuccess: any;
  showCancel: any;
  showError: any;

  totales:any;

  ngOnInit() {
    
  }


  






  async ionViewWillEnter(){


    this.id_cliente = localStorage.getItem('id_cliente');

    this.totales=localStorage.getItem('totales_final')
    
    console.log(this.totales)

this.initConfig(this.totales);

console.log(this.id_cliente)


    //telefonia
    let params = {
      idmkt_clientes: this.id_cliente
    };

    console.log(params)



if(this.id_cliente ){



    await this.getInfoCliente.GetInfoCliente(params)
    .then(async (respuesta) => {
      // console.log(respuesta);

      this.data = respuesta.data;



     this.nombre=this.data[0].nombre;

     this.apellido=this.data[0].apellido;

     this.celular=this.data[0].celular;

     this.email=this.data[0].email;

     this.calle=this.data[0].calle;
     this.colonia=this.data[0].colonia;

     this.numero=this.data[0].numero;

     this.alcaldia=this.data[0].alcaldia;
     this.cp=this.data[0].cp;
     this.instrucciones=this.data[0].instrucciones;
     this.estado=this.data[0].estado;

      console.log(this.data);

   

        
      });

    }

    else{
      this.router.navigate(['/login']);

    }


  }



  async initConfig(totales: any) {
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
        label: 'paypal',
        layout: 'vertical',
        shape: 'pill',
        color: 'gold',
        // layout: 'horizontal',
        // label: 'paypal',
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








  pago(nombre:any, calle:any,numero:any, colonia:any,alcaldia:any, cp:any,estado:any,instrucciones:any){




    console.log(nombre,calle, numero, colonia, alcaldia, cp, estado, instrucciones)






  }



}

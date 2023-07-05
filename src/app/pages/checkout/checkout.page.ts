import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GetMktDetalleProductoService } from 'src/app/services/get-mkt-detalle-producto.service';
import { GetInfoClienteService } from 'src/app/services/get-info-cliente.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CheckoutPage implements OnInit {
  data: any;
  cliente: any;
  botones: any;
  currentWindowWidth: any;
  cantidad: any;
  total: any;
  id_cliente: any;
  data_cliente: any;

  email: any;
  password: any;
  nombre: any;

  apellido: any;
  celular: any;
  calle: any;
  numero: any;
  colonia: any;
  alcaldia: any;
  cp: any;
  instrucciones: any;
  estado: any;

  constructor(
    private GetDetalleProducto: GetMktDetalleProductoService,
    private router: Router,
    private menu: MenuController,
    public alertController: AlertController,
    private getInfoCliente: GetInfoClienteService
  ) {}

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  async ionViewWillEnter() {
    // traer data de direccion
    this.id_cliente = localStorage.getItem('id_cliente');
    // console.log(this.id_cliente);

    let request = {
      idmkt_clientes: this.id_cliente
    };

    await this.getInfoCliente.GetInfoCliente(request).then(async (resp) => {
      // console.log(resp);

      this.data_cliente = resp.data;

      this.nombre = this.data_cliente[0].nombre;
      this.apellido = this.data_cliente[0].apellido;
      this.email = this.data_cliente[0].email;
      this.celular = this.data_cliente[0].celular;
      this.password = this.data_cliente[0].password;

      this.calle = this.data_cliente[0].calle;
      this.numero = this.data_cliente[0].numero;
      this.colonia = this.data_cliente[0].colonia;
      this.alcaldia = this.data_cliente[0].alcaldia;
      this.cp = this.data_cliente[0].cp;
      this.estado = this.data_cliente[0].estado;
      this.instrucciones = this.data_cliente[0].instrucciones;
    });

    if (localStorage.getItem('ingresado') != 'si') {
      this.cliente = '';
      this.botones = '0';
      // console.log('no');
    } else {
      this.cliente = localStorage.getItem('cliente');
      this.botones = '1';
      // console.log('si');
    }

    // console.log('cnte', this.cliente);

    //telefonia
    let params = {
      idmkt_productos: localStorage.getItem('idmkt_productos'),
    };

    // console.log(params)

    await this.GetDetalleProducto.GetMktProductoDetalle(params).then(
      async (respuesta) => {
        // console.log(respuesta);

        this.data = respuesta.data;
        this.cantidad = localStorage.getItem('cantidad');

        this.total = this.data[0].precio * this.cantidad;
      }
    );
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
    localStorage.setItem('id_cliente', '');
    localStorage.setItem('cliente', '');

    this.menu.toggle();

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Sesión cerrada con éxito',
      // message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();

    this.router.navigate(['/home']);

    localStorage.removeItem('ingresado');
  }
}

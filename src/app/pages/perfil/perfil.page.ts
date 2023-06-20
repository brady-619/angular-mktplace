import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginClienteService } from '../../services/login-cliente.service';
import { GetEditClienteService } from 'src/app/services/get-edit-cliente.service';
import { UpdateClienteService } from 'src/app/services/update-cliente.service';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
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
export class PerfilPage implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private loginCliente: LoginClienteService,
    private getInfoCliente: GetEditClienteService,
    private updateCliente: UpdateClienteService
  ) {}

  email: any;
  password: any;
  cliente: any;
  id_cliente: any;
  nombre: any;
  data: any;
  apellido: any;
  celular: any;
  calle: any;
  numero: any;
  colonia: any;
  alcaldia: any;
  cp: any;
  instrucciones: any;
  estado: any;
  // estado='CDMX';

  ngOnInit() {}

  async ionViewWillEnter() {
    this.id_cliente = localStorage.getItem('id_cliente');

    //  console.log("id", this.id_cliente)

    if (this.id_cliente) {
      let params = {
        id_cliente: this.id_cliente,
      };

      await this.getInfoCliente.InfoCliente(params).then(async (respuesta) => {
        console.log(respuesta);

        this.data = respuesta.data;

        this.nombre = this.data[0].nombre;
        this.apellido = this.data[0].apellido;
        this.email = this.data[0].email;
        this.celular = this.data[0].celular;
        this.password = this.data[0].password;

        this.calle = this.data[0].calle;
        this.numero = this.data[0].numero;
        this.colonia = this.data[0].colonia;
        this.alcaldia = this.data[0].alcaldia;
        this.cp = this.data[0].cp;
        this.estado = this.data[0].estado;
        this.instrucciones = this.data[0].instrucciones;
      });
    }
  }

  async save(
    nombre: any,
    apellido: any,
    email: any,
    celular: any,
    password: any,
    calle: any,
    numero: any,
    colonia: any,
    alcaldia: any,
    cp: any,
    estado: any,
    instrucciones: any
  ) {
    console.log(
      'nom',
      nombre,
      apellido,
      email,
      celular,
      password,
      calle,
      numero,
      colonia,
      alcaldia,
      cp,
      estado,
      instrucciones
    );

    this.id_cliente;

    let params = {
      data: [
        {
          nombre: nombre,
          apellido: apellido,
          email: email,
          celular: celular,
          password: password,
          calle: calle,
          numero: numero,
          colonia: colonia,
          alcaldia: alcaldia,
          cp: cp,
          estado: estado,
          instrucciones: instrucciones,
          id_cliente: this.id_cliente,
        },
      ],
    };

    console.log('params', params);

    await this.updateCliente.UpdateCliente(params).then(async (respuesta) => {
      console.log(respuesta);

      if ((respuesta.status = '000')) {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Tu registro ha sido exitoso',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();

        this.router.navigate(['/home']);
      } else {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Error al cargar tu registro',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
      }
    });
  }

  async inicio(email: any, password: any) {
    console.log(email);
    console.log('params', email, password);

    let params = {
      email: email,
      password: password,
    };

    await this.loginCliente.LoginCliente(params).then(async (respuesta) => {
      console.log(respuesta);

      if (respuesta.status === '000') {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Inicio de sesión exitoso',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();

        // se obtiene el nombre
        // console.log(respuesta.data[0].nombre);
        localStorage.setItem('cliente', respuesta.data[0].nombre);
        localStorage.setItem('id_cliente', respuesta.data[0].idmkt_clientes);

        localStorage.setItem('ingresado', 'si');

        this.router.navigate(['/home']);
        // setTimeout(function(){location.reload()}, 3000);
      } else {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Error usuario no encontrado',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
      }
    });
  }
}

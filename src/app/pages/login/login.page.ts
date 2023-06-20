import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { LoginClienteService } from 'src/app/services/login-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
export class LoginPage implements OnInit {
  constructor(
    private loginCliente: LoginClienteService,
    private router: Router,
    private alertController: AlertController
  ) {}

  email: any;
  password: any;

  ngOnInit() {}

  async login(email: any, password: any) {
    // console.log(email);
    // console.log('params', email, password);

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

        setTimeout(() => {

          this.router.navigate(['home'])
          .then(() => {
            window.location.reload();
          });
    
        }, 3000);
    
    
      
        
        
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

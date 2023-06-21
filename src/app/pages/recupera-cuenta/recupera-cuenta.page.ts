import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { Router } from '@angular/router';
import { LoginResetPasswordService } from 'src/app/services/login-reset-password.service';
import { UpdatePasswordService } from 'src/app/services/update-password.service';

@Component({
  selector: 'app-recupera-cuenta',
  templateUrl: './recupera-cuenta.page.html',
  styleUrls: ['./recupera-cuenta.page.scss'],
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
export class RecuperaCuentaPage implements OnInit {

  constructor(
    private LoginResetPassword: LoginResetPasswordService,
    private router: Router,
    private alertController: AlertController,
    private updatePassword: UpdatePasswordService,

  ) {}

  email: any;
  celular: any;
  password:any;

  ngOnInit() {}

  async restablecer(email: any, celular: any, password:any) {
    // console.log(email);
    // console.log('params', email, password);

    let params = {
      email: email,
      celular: celular
    };

    console.log(params)






    await this.LoginResetPassword.LoginResetPassword(params).then(async (respuesta) => {
      console.log(respuesta);


      const idmkt_clientes= respuesta.data[0].idmkt_clientes


      console.log(idmkt_clientes)


      if (respuesta.status === '000') {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Cambio de contraseña exitoso',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });



                     let request = {
                  data: [{  password: password, id_cliente:idmkt_clientes
                   }] }



        await this.updatePassword.UpdatePassword(request).then(async (respuesta) => {
          // console.log(respuesta);
        });








        await alert.present();

     

        setTimeout(() => {

          this.router.navigate(['login'])
          .then(() => {
            window.location.reload();
          });
    
        }, 3000);
    
    
      
        
        
      } else {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Error usuario no encontrado, favor de validar campos de nuevo',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
      }
    });
  }
}


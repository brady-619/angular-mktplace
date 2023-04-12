import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { InsertClienteService } from '../../services/insert-cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegistroPage implements OnInit {
  constructor(private router: Router, private alertController: AlertController, private insertCliente: InsertClienteService) {}

  nombre: any;
  apellido: any;
  email: any;
  password: any;
  celular:any;

  ngOnInit() {}

  perfil() {
    this.router.navigate(['/perfil']);
  }

  home() {
    this.router.navigate(['/home']);
  }

  async save(nombre: any, apellido: any, email: any, celular:any,password: any) {
    console.log('params', nombre, apellido, email,celular, password);



let params = {
      data: [{nombre: nombre, apellido: apellido, email: email, celular:celular, password:password }]
    }

    console.log("params", params)


    await this.insertCliente.InsertCliente(params).then(async respuesta => {
      console.log(respuesta);

      if (respuesta.status = "000") {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Tu registro ha sido exitoso',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
        

        // this.beneficiarioForm = new FormGroup({
        //   nombre: new FormControl('', [Validators.required, Validators.minLength(1)]),
        //   rfc: new FormControl(''),
        //   telefono: new FormControl(''),
        //   cuenta: new FormControl(''),
        //   banco: new FormControl('')
        // });

            // window.location.reload();



        
    let params = {
      data: [{nombre: "", telefono: "", password: "" }]
    }

    this.router.navigate(['/perfil'])



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
}

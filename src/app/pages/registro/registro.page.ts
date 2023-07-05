import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  AlertController, IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { Router } from '@angular/router';
import { InsertClienteService } from 'src/app/services/insert-cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,CommonModule,ComponentsModule,FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistroPage implements OnInit {
  constructor(private router: Router, private alertController: AlertController, private insertCliente: InsertClienteService) {}

  nombre: any;
  apellido: any;
  email: any;
  password: any;
  celular:any;



  ngOnInit() {}

  async save(nombre: any, apellido: any, email: any, celular:any,password: any) {
    // console.log('params', nombre, apellido, email,celular, password);

    nombre==undefined?nombre='':nombre;
    apellido==undefined?apellido='':apellido;
    email==undefined?email='':email;
    celular==undefined?celular='':celular;
    password==undefined?password='':password;



    if(nombre.length>=3 &&
      apellido.length>=3 &&
      email.length>=7 &&
      celular.length>=10 &&
      password.length>=3
      
      ){

    






let params = {
      data: [{nombre: nombre, apellido: apellido, email: email, celular:celular, password:password }]
    }

    // console.log("params", params)


    await this.insertCliente.InsertCliente(params).then(async respuesta => {
      // console.log(respuesta);

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

    this.router.navigate(['/login'])



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


else{
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Favor de ingresar valores válidos en tu registro',
    // message: 'This is an alert!',
    buttons: ['OK'],
  });

  await alert.present();

}



}
}




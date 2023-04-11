import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginClienteService } from '../../services/login-cliente.service';
import { GetEditClienteService } from 'src/app/services/get-edit-cliente.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {



  constructor(private router: Router, private alertController: AlertController, private loginCliente: LoginClienteService,private getInfoCliente: GetEditClienteService) { }

  email:any;
  password:any;
  cliente:any;
  id_cliente:any;
nombre:any;
data:any;

  ngOnInit() {
  }


   async ionViewWillEnter(){
     this.cliente = localStorage.getItem("cliente")
     this.id_cliente = localStorage.getItem("id_cliente")

     console.log("id", this.id_cliente)


  
     if ( this.id_cliente !='' ){

      let params = {
        id_cliente: this.id_cliente
      }

      await this.getInfoCliente.InfoCliente(params).then(async respuesta => {
        console.log(respuesta);

   this.data= respuesta.data

         this.nombre=this.data[0].nombre;
       
      
      
      });
      
      

      
    }





 
  }



  async save(nombre:any){
    console.log("nom", nombre)

  }




  async inicio(email:any, password:any){

    console.log(email)
    console.log("params", email, password);



let params = {
  email: email, password: password
}



await this.loginCliente.LoginCliente(params).then(async respuesta => {
  console.log(respuesta);

  if (respuesta.status === "000") {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Inicio de sesión exitoso',
      // message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();


    // se obtiene el nombre
    // console.log(respuesta.data[0].nombre);
    localStorage.setItem("cliente",respuesta.data[0].nombre)
    localStorage.setItem("id_cliente",respuesta.data[0].idmkt_clientes)




    this.router.navigate(['/home'])
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


  registro(){
    this.router.navigate(['/registro'])

  }

  home() {
    this.router.navigate(['/home']);
  }



}

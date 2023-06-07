import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

import { GetProductosHeaderService } from 'src/app/services/get-productos-header.service';

import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor( public alertController: AlertController,private menu:MenuController, private route: Router, private menuCtrl: MenuController, private getProductosHeader:GetProductosHeaderService ) {}

  ngOnInit() {
    
  }

  open:any
  valor:any;
  filterValue:any
  data_header:any;



  toogleMenu(){
    this.menuCtrl.toggle();

  }


  miperfil(){
    this.menu.toggle()
    this.route.navigate(['/perfil']);


  }



 async salir(){


  localStorage.setItem("id_cliente","")
  localStorage.setItem("cliente","")

  
  this.menu.toggle()

  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Sesión cerrada con éxito',
    // message: 'This is an alert!',
    buttons: ['OK'],
  });

  await alert.present();


  window.location.reload();

  localStorage.removeItem("ingresado");

 }


 buscar(){
  console.log("abre")
  this.open=true




 }

 async cerrar(){
  console.log("cierra")
  this.open=false
  this.data_header==undefined

  this.filterValue=undefined

console.log(this.data_header)



console.log(this.data_header)

 }





 async applyFilter(event: Event) {


  console.log(event)

  this.filterValue = (event.target as HTMLInputElement).value;




    this.filterValue = this.filterValue.trim().toLowerCase();
  console.log(this.filterValue);

  // localStorage.setItem(this.filterValue,'busqueda')


      //telefonia
      let params = {
        producto: '%'+this.filterValue+'%'
      }

 
if(this.filterValue.length > 0){

        await this.getProductosHeader.GetProductosHeader(params).then(async respuesta => {
        console.log(respuesta);
         this.data_header= respuesta.data;    
      });
}
else{
  console.log("nada")
}


      
  

}

home(){
  console.log("regresa")
  this.route.navigate(['/home']);
}





productobuscado(productobuscado:any){
  console.log("diste click en", productobuscado)


  console.log("cierra")
  this.open=false
  this.data_header==undefined

  this.filterValue=undefined



}


}

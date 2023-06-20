import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { GetInfoClienteService } from 'src/app/services/get-info-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
  standalone: true,
  imports: [IonicModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,CommonModule,ComponentsModule,FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class EnvioPage implements OnInit {

  constructor(private getInfoCliente: GetInfoClienteService,    private router: Router) { }

  ngOnInit() {
  }
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

  async ionViewWillEnter(){


    this.id_cliente = localStorage.getItem('id_cliente');



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





  pago(nombre:any, calle:any,numero:any, colonia:any,alcaldia:any, cp:any,estado:any,instrucciones:any){




    console.log(nombre,calle, numero, colonia, alcaldia, cp, estado, instrucciones)






  }



}

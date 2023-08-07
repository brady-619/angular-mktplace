import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
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
export class ResumenPage implements OnInit {

  constructor(
    private router: Router) { }

  totales:any;
  c_envio:any;

  filterValue: any;
  totales_final:any;

  

  totales_descuento=0;
  ngOnInit() {
  }

  async ionViewWillEnter() {

    console.log("puntos fn",localStorage.getItem('puntos_finales'))

    // no se mueve
   this.totales= localStorage.getItem('totales_final_nuevo');


   this.totales>=500? this.c_envio=0:this.c_envio=80


  this.totales_final  =Number(this.totales)+Number(this.c_envio)


localStorage.setItem('total_pagar', this.totales_final)

  }


  async applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;

    this.filterValue = this.filterValue.trim().toLowerCase();
    // console.log(this.filterValue);

    // totales traidos de antes
    // console.log(this.totales)
    
    console.log(this.filterValue);


    



    if (this.filterValue == 'promosim40') {
      //  console.log("aplica descuento")

      this.totales_descuento = Number((this.totales * 0.40).toFixed(2));

      Number(this.totales) - Number(this.totales_descuento)<=500?this.c_envio=80:  this.c_envio=0


      this.totales_final = Number(this.totales)- Number(this.totales_descuento) + Number(this.c_envio) ;

      localStorage.setItem('total_pagar', this.totales_final)
    } else if (this.filterValue == 'apertura25') {
      //  console.log("aplica descuento")

      this.totales_descuento = Number((this.totales * 0.25).toFixed(2));

      Number(this.totales) - Number(this.totales_descuento)<=500?this.c_envio=80:  this.c_envio=0


      this.totales_final = Number(this.totales)- Number(this.totales_descuento) + Number(this.c_envio) ;



      localStorage.setItem('total_pagar', this.totales_final)
    } 
    else{

      this.totales= localStorage.getItem('totales_final_nuevo');


      this.totales>=500? this.c_envio=0:this.c_envio=80

      this.totales_descuento=0;
   
   
     this.totales_final  =Number(this.totales)+Number(this.c_envio)



     localStorage.setItem('total_pagar', this.totales_final)

    }
    








  }

envio(){
  this.router.navigate(['/envio']);
}


}

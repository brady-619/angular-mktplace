import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';
import { GetMktProductosService } from '../../services/get-mkt-productos.service';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

import {MatSort, Sort} from '@angular/material/sort';
import {ViewChild} from '@angular/core';

import {LiveAnnouncer} from '@angular/cdk/a11y';

import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { CommonModule } from '@angular/common';



export interface PeriodicElement {
  producto: string;
  imagen: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,CommonModule],
})
export class HomePage {

  data: any;
  dataSource = new MatTableDataSource <PeriodicElement>();
  cliente:any;
  id_cliente:any;



  displayedColumns: string[] = ['producto'];

  constructor(private _liveAnnouncer: LiveAnnouncer, private route: Router,  public alertController: AlertController,private menu:MenuController, private getProductos: GetMktProductosService   ) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }


  



  





  async ionViewWillEnter(){

    // ngAfterViewInit
    this.cliente = localStorage.getItem("cliente")
    this.id_cliente = localStorage.getItem("id_cliente")

    console.log("id", this.id_cliente)






   


    await this.getProductos.GetMktProductos().then(async respuesta => {
      console.log(respuesta);

    this.data = respuesta.data;

    let ELEMENT_DATA: PeriodicElement[] = respuesta.data;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    // this.dataSource = ELEMENT_DATA;

    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);


    console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
    });







  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    console.log("mueve", sortState)
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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



 }

  
}

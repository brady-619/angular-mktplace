import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
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


import { register } from 'swiper/element/bundle';

import { IonicSlides } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components.module';
import { FormsModule } from '@angular/forms';
import { GetProductosDestacadosService  } from '../../services/get-productos-destacados.service';
import { GetCountCarritoService } from 'src/app/services/get-count-carrito.service';




register();

export interface PeriodicElement {
  producto: string;
  imagen: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,MatTableModule,MatPaginatorModule,MatInputModule,MatSortModule,CommonModule,ComponentsModule,FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {


  swiperModules = [IonicSlides];

  data: any;
  dataSource = new MatTableDataSource <PeriodicElement>();
  cliente:any;
  id_cliente:any;
  botones:any;
  ingresado:any;
  destacados:any;

  currentWindowWidth:any;


  displayedColumns: string[] = ['producto','precio','categoria'];

  constructor(private router: Router,private _liveAnnouncer: LiveAnnouncer, private route: Router,  public alertController: AlertController,private menu:MenuController, private getProductos: GetMktProductosService, private getProductosDestacados: GetProductosDestacadosService ,
    private getCountCarrito: GetCountCarritoService ) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }


  

 @Input() contador:string | undefined; 


  
  public isMobileLayout = false;

  ngOnInit() {
    
  }





  async ionViewWillEnter(){



     this.cliente= localStorage.getItem('cliente')



    let params = {
      cliente: this.cliente
    }


    if(this.cliente){


 await this.getCountCarrito.GetCountCarrito(params).then(async respuesta => {
      console.log(respuesta);

       this.contador= respuesta.data[0].contador;

    
    
    });
    
  }




    this.currentWindowWidth = window.innerWidth;




    // obtenemos los prod destacdos
  this.getProductosDestacados.GetProductosDestacados().then(async respuesta => {
      // console.log("destacados",respuesta);

      this.destacados = respuesta.data

    });
  

    
    

    if(localStorage.getItem("ingresado")!='si'  ){
      
      this.cliente='';
      this.botones='0'
      // console.log("no")
     this.ingresado= localStorage.getItem("ingresado")

    // console.log("cliente", this.cliente)
    }
    else{
      this.cliente = localStorage.getItem("cliente")
      this.botones='1'
      // console.log("si")

    // console.log("cliente", this.cliente)
    }



    
    // await console.log("cliente", this.cliente)

    // ngAfterViewInit
   this.cliente = localStorage.getItem("cliente")
    this.id_cliente = localStorage.getItem("id_cliente")

    // console.log("id", this.id_cliente)






   


    // await this.getProductos.GetMktProductos().then(async respuesta => {
    //   console.log(respuesta);

    // this.data = respuesta.data;



    // let ELEMENT_DATA: PeriodicElement[] = respuesta.data;
    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);



    // console.log(this.dataSource)
    // this.dataSource.paginator = this.paginator;
    // });







  }

  // applyFilter(event: Event) {
  //   console.log("entra")
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();



    



  // }

  // announceSortChange(sortState: Sort) {
  //   console.log("mueve", sortState)

  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }


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


 home(){
  console.log("home")
 }


 telefonia(){

  
  this.router.navigate(['/telefonia']);
 }

 carrito(){

  
  this.router.navigate(['/carrito']);
 }


 sims(){

  
  this.router.navigate(['/sims']);
 }





 detalle(idmkt_productos:any, categoria:any){

  console.log(idmkt_productos)




  this.router.navigate(['/ver-detalle/'+idmkt_productos+'/'+categoria]);



}




 audifonosbt(){
  console.log("audifonosbt")


  this.router.navigate(['/audifonos-bt']);


 }

 
manoslibres(){
  console.log("manoslibres")


  this.router.navigate(['/manos-libres']);
}


 
cargadores(){
  console.log("cargadores")


  this.router.navigate(['/cargadores']);
}


 
bocinas(){
  console.log("bocinas")


  this.router.navigate(['/bocinas']);
}


 
smartwatch(){
  console.log("smartwatch")


  this.router.navigate(['/smart-watch']);
}


 
 
hogar(){
  console.log("hogar")


  this.router.navigate(['/hogar']);
}

 
cables(){
  console.log("cables")


  this.router.navigate(['/cables']);
}

 
plugin(){
  console.log("plugin")


  this.router.navigate(['/plug-in']);
}

powerbank(){
  console.log("power-bank")


  this.router.navigate(['/power-bank']);
}

 
belleza(){
  console.log("belleza")


  this.router.navigate(['/belleza']);
}



  
}

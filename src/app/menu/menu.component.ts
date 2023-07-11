import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {


  id_cliente:any

  constructor(private router: Router,private menu: MenuController) { }

  ngOnInit() {

 this.id_cliente= localStorage.getItem('id_cliente')



  }

  inicio(){
    this.router.navigate(['/home']);
    this.menu.close();
  }

  audifonosbt(){
    this.router.navigate(['/audifonos-bt']);
    this.menu.close();
  }
  manoslibres(){
    this.router.navigate(['/manos-libres']);
    this.menu.close();
  }
  cargadores(){
    this.router.navigate(['/cargadores']);
    this.menu.close();
  }

  bocinas(){
    this.router.navigate(['/bocinas']);
    this.menu.close();
  }
  smartwatch(){
    this.router.navigate(['/smart-watch']);
    this.menu.close();
  }
  hogar(){
    this.router.navigate(['/hogar']);
    this.menu.close();
  }
  cables(){
    this.router.navigate(['/cables']);
    this.menu.close();
  }
  plugin(){
    this.router.navigate(['/plug-in']);
    this.menu.close();
  }
  powerbank(){
    this.router.navigate(['/power-bank']);
    this.menu.close();
  }
  belleza(){
    this.router.navigate(['/belleza']);
    this.menu.close();
  }

  login(){
    this.router.navigate(['/login']);
    this.menu.close();
  }

  perfil(){
    this.router.navigate(['/perfil']);
    this.menu.close();
  }



  mispedidos(){
    this.router.navigate(['/mis-pedidos']);
    this.menu.close();
  }

  sims(){
    this.router.navigate(['/sims']);
    this.menu.close();

  }






  salir(){
// console.log("cierra sesion")
window.localStorage.clear();
    this.menu.close();




    setTimeout(() => {

      this.router.navigate(['home'])
      .then(() => {
        window.location.reload();
      });

    }, 3000);


  }
}

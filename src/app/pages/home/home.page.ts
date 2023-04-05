import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor( private route: Router, private menu:MenuController) {}


  miperfil(){
    this.menu.toggle()
    this.route.navigate(['/perfil']);


  }



  salir(){

  }


}

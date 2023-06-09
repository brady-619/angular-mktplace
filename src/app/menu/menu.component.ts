import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private router: Router,private menu: MenuController) { }

  ngOnInit() {}

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
}

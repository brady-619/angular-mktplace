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

}

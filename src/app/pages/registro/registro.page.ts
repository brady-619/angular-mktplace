import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegistroPage implements OnInit {
  constructor(private router: Router) {}

  nombre: any;
  apellido: any;
  email: any;
  password: any;
  celular:any;

  ngOnInit() {}

  perfil() {
    this.router.navigate(['/perfil']);
  }

  home() {
    this.router.navigate(['/home']);
  }

  save(nombre: any, apellido: any, email: any, celular:any,password: any) {
    console.log('params', nombre, apellido, email, password);
  }
}

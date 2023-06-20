import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-recupera-cuenta',
  templateUrl: './recupera-cuenta.page.html',
  styleUrls: ['./recupera-cuenta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecuperaCuentaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

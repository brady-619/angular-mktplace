import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components.module';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.page.html',
  styleUrls: ['./mis-pedidos.page.scss'],
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
export class MisPedidosPage implements OnInit {

  constructor() { }

  // ESATUS DE ENVIO
  // 1 PREPARANDO ENVIO
  // 2 EN RUTA
  // 3 ENTREGADO

  ngOnInit() {
  }




}

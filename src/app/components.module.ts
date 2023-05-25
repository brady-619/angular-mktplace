
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';


import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
      ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent
 
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }



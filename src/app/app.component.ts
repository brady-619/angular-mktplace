import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from './components.module';

// import { register } from 'swiper/element';

// register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,ComponentsModule ],
})
export class AppComponent {
  constructor() {}
}

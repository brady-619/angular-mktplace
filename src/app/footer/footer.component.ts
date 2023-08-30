import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {


  // countrycode:string ="52"; 
  // whatsappnumber:string ="55 4105 4696";

  url:string= "https://wa.me/message/4SJ5QOKAXRHSC1";
  urlinsta:string="https://instagram.com/cellularplanet_app?igshid=OGQ5ZDc2ODk2ZA==";
  urlface:string="https://www.facebook.com/cellularplanetmexico";
  urllocal:string="https://www.google.com.mx/maps/place/CELLULAR+PLANET/@19.4275382,-99.1446357,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff0e39dc976d:0x65dcfcbb5dee5582!8m2!3d19.4275332!4d-99.1420608!16s%2Fg%2F11ghpn3z5r?entry=ttu";


  constructor(private router: Router) { }

  ngOnInit() {}

  whats(){
    // console.log("da")
    // this.router.navigate(["https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías brindarme mayor información de los Planes de Previsión J. García López."])
    // // window.location.href=this.url;

    // window.location.href = "https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías brindarme mayor información de un producto Cellular Planet.";

    

     window.open(this.url, '_blank');

  }

  insta(){
    // console.log("da")
    // this.router.navigate(["https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías brindarme mayor información de los Planes de Previsión J. García López."])
    // // window.location.href=this.url;

    // window.location.href = "https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías brindarme mayor información de un producto Cellular Planet.";

    

     window.open(this.urlinsta, '_blank');

  }
  face(){
    // console.log("da")
    // this.router.navigate(["https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías brindarme mayor información de los Planes de Previsión J. García López."])
    // // window.location.href=this.url;

    // window.location.href = "https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías brindarme mayor información de un producto Cellular Planet.";

    

     window.open(this.urlface, '_blank');

  }


  local(){
    window.open(this.urllocal, '_blank');
  }

}

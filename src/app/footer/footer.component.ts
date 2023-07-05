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

  url:string= "https://wa.me/message/4SJ5QOKAXRHSC1"


  constructor(private router: Router) { }

  ngOnInit() {}

  pba(){
    // console.log("da")
    // this.router.navigate(["https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías brindarme mayor información de los Planes de Previsión J. García López."])
    // // window.location.href=this.url;

    // window.location.href = "https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías brindarme mayor información de un producto Cellular Planet.";

    

     window.open(this.url, '_blank');

  }

}

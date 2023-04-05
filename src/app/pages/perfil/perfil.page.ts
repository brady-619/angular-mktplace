import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {



  constructor(private router: Router) { }

  email:any;
  password:any;

  ngOnInit() {
  }




  inicio(email:any, password:any){

    console.log(email)

    console.log("params", email, password);
    


  }


  registro(){
    this.router.navigate(['/registro'])

  }




}

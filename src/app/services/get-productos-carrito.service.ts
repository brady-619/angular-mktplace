import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductosCarritoService {

  

  constructor(private http:HttpClient) { }

  GetProductosCarrito(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://lhu8h50b84.execute-api.us-east-1.amazonaws.com/dev/get_productos_carrito',params).subscribe({
      next: resp =>{
        // console.log(resp);
        resolve(resp);

      },
      error: err =>{
        console.log(err.error)
        reject(err)
      }
    });
    

  })}


}


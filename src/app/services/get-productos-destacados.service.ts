import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductosDestacadosService {


  constructor(private http:HttpClient) { }

  GetProductosDestacados():Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.get('https://lhu8h50b84.execute-api.us-east-1.amazonaws.com/dev/get-productos-destacados3').subscribe({
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

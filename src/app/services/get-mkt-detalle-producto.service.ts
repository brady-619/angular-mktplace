import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMktDetalleProductoService {

  

  constructor(private http:HttpClient) { }

  GetMktProductoDetalle(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://lhu8h50b84.execute-api.us-east-1.amazonaws.com/dev/get_mkt_detalle_producto',params).subscribe({
      next: resp =>{
        resolve(resp);
      },
      error: err =>{
        reject(err)
      }
    });
  })}


}

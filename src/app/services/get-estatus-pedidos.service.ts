import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEstatusPedidosService {

 

  constructor(private http: HttpClient) {}

  GetEstatusPedido(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(
          ' https://lhu8h50b84.execute-api.us-east-1.amazonaws.com/dev/get_estatus_pedidos',
          params
        )
        .subscribe({
          next: (resp) => {
            // console.log(resp);
            resolve(resp);
          },
          error: (err) => {
            // console.log(err.error);
            reject(err);
          },
        });
    });
  }
}

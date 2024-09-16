import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcesarPedidoService {

  constructor(http: HttpClient) { }

  categorias():Observable<any> {
    let url="http://localhost:8001/categorias";
    return this.http.get(url);
  }
}

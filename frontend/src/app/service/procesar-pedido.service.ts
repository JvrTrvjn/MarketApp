import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcesarPedidoService {

  constructor(private http: HttpClient) { }

  categorias():Observable<any> {
    let url="http://localhost:8001/categorias";
    return this.http.get(url);
  }
  productosCategorias(idCategoria:number){
    let url="http://localhost:8001/productos/"+idCategoria;
    return this.http.get(url);
  }
}

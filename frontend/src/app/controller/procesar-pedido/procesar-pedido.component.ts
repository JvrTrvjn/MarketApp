import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Producto } from 'src/app/model/Producto';
import { ProcesarPedidoService } from 'src/app/service/procesar-pedido.service';

@Component({
  selector: 'app-procesar-pedido',
  templateUrl: './procesar-pedido.component.html',
  styleUrls: ['./procesar-pedido.component.css']
})
export class ProcesarPedidoComponent implements OnInit {

  categorias:Categoria[]=[];
  productos:Producto[]=[];
  idCategoriasSel:number=0;

  constructor(private procesarPedidoService: ProcesarPedidoService) { }

  ngOnInit(): void {
  }

}

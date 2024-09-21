import { Component, OnInit } from '@angular/core';
import { CarritoCompra } from 'src/app/model/CarritoCompra';
import { Categoria } from 'src/app/model/Categoria';
import { Producto } from 'src/app/model/Producto';
import { ProcesarPedidoService } from 'src/app/service/procesar-pedido.service';

@Component({
  selector: 'app-procesar-pedido',
  templateUrl: './procesar-pedido.component.html',
  styleUrls: ['./procesar-pedido.component.css']
})
export class ProcesarPedidoComponent implements OnInit {

  categorias: Categoria[] = [];
  productos: Producto[] = [];
  idCategoriasSel: number = 0;
  carrito: CarritoCompra[] = [];
  constructor(private procesarPedidoService: ProcesarPedidoService) { }

  ngOnInit(): void {
    this.procesarPedidoService.categorias().subscribe(c => this.categorias = c);
  }

  productosCategoria() {
    this.procesarPedidoService.productosCategorias(this.idCategoriasSel).subscribe(p => this.productos = p);
  }

  agregarProductoCarrito(producto: Producto) {
    if (producto.unidades <= producto.stock) {
      let item = new CarritoCompra();
      item.producto = producto;
      item.unidades = producto.unidades;
      //actualizar stock
      producto.stock = producto.stock - producto.unidades;
      
      this.carrito.push(item);
    } else {
      alert("No hay suficientes unidades de este producto");
    }
  }

  quitarProductoCarrito(producto: CarritoCompra) {
    let index = this.carrito.indexOf(producto);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    } else {
      alert("No existe este producto en el carrito");
    }
  }
}

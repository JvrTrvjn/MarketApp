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

  eliminarProductoCarrito(index: number) {
    let item = this.carrito[index];
    this.carrito.splice(index, 1);
    //loclizamos el producto para actualizar stock
    let producto = this.productos.find(p => p.idProducto == item.producto.idProducto);
    if (producto) {
      producto.stock = producto.stock + item.unidades;
    } else {
      console.error('Producto no encontrado');
    }  }
}

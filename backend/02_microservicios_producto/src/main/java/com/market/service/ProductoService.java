package com.market.service;

import com.market.model.Categoria;
import com.market.model.Producto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductoService {
    List<Categoria> categorias();
    List<Producto> productosPorCategoria(int idCategoria);
    Producto actualizarStock(int idProducto, int unidades);
    Producto productoPorCodigo(int idProducto);

}

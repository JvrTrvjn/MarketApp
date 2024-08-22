package com.market.service;

import com.market.model.Categoria;
import com.market.model.Producto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductoService {
    List<Categoria> categorias();
    List<Producto> productosPorcategoria(Integer idCategoria);
    Producto actualizarStock(Integer idProducto, Integer unidades);
    Producto productoPorCodigo(Integer idProducto);

}

package com.market.service;

import com.market.model.Categoria;
import com.market.model.Producto;
import com.market.repository.CategoriasRepository;
import com.market.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService{

    @Autowired
    CategoriasRepository categoriasRepository;

    @Autowired
    ProductoRepository productoRepository;

    @Override
    public List<Categoria> categorias() {
        return categoriasRepository.findAll();
    }

    @Override
    public List<Producto> productosPorcategoria(Integer idCategoria) {
        return productoRepository.findByIdCategoria(idCategoria);
    }

    @Override
    public Producto actualizarStock(Integer idProducto, Integer unidades) {
        Producto producto = productoPorCodigo(idProducto);
        if(producto !=null && producto.getStock() >= unidades){
            producto.setStock(producto.getStock() - unidades);
            productoRepository.save(producto);
            return producto;
        }
        return null;
    }

    @Override
    public Producto productoPorCodigo(Integer idProducto) {
        return productoRepository.findById(idProducto).orElse(null);
    }
}

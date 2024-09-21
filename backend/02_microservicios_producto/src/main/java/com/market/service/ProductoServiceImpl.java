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
    private CategoriasRepository categoriaRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public List<Categoria> categorias() {
        return categoriaRepository.findAll();
    }

    @Override
    public List<Producto> productosPorCategoria(int idCategoria) {
        return productoRepository.findByIdCategoria(idCategoria);
    }

    @Override
    public Producto actualizarStock(int idProducto, int unidades) {
        Producto producto = productoPorCodigo(idProducto);
        if(producto != null & producto.getStock()>=unidades){
            producto.setStock(producto.getStock() - unidades);
            productoRepository.save(producto);
            return producto;
        }
        return null;
    }

    @Override
    public Producto productoPorCodigo(int idProducto) {
        return productoRepository.findById(idProducto).orElse(null);
    }
}

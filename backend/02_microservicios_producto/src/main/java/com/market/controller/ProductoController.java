package com.market.controller;

import com.market.model.Categoria;
import com.market.model.Producto;
import com.market.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductoController {
    @Autowired
    ProductoService productoService;

    @GetMapping(value = "categorias", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Categoria>> categorias(){
        return new ResponseEntity<>(productoService.categorias(), HttpStatus.OK);
    }

    @GetMapping(value = "productos/categoria", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Producto>> productosCategorias(@RequestParam("idCategoria")int idCategoria){
        return new ResponseEntity<>(productoService.productosPorcategoria(idCategoria), HttpStatus.OK);
    }

    @GetMapping(value = "productos/codigo", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Producto> productosPorCodigo(@RequestParam("idProducto")int idProducto){
        return new ResponseEntity<>(productoService.productoPorCodigo(idProducto), HttpStatus.OK);
    }

    @PutMapping(value = "producto")
    public ResponseEntity<Void> actualizarStock(@RequestParam("idProducto") int idProducto,@RequestParam("unidades")  int unidades){
        Producto producto = productoService.actualizarStock(idProducto, unidades);
        if(producto != null){
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

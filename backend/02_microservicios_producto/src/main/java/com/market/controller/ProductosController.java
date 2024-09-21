package com.market.controller;

import com.market.model.Categoria;
import com.market.model.Producto;
import com.market.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductosController {

    @Autowired
    private ProductoService productoService;

    @GetMapping(value = "categorias", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Categoria>> categorias(){
        return new ResponseEntity<>(productoService.categorias(), HttpStatus.OK);
    }

    @GetMapping(value = "productos", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Producto>> productosCategoria(@RequestParam("idCategoria") int idCategoria){
        return new ResponseEntity<>(productoService.productosPorCategoria(idCategoria), HttpStatus.OK);
    }

    @GetMapping(value = "producto", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Producto> productoCodigo(@RequestParam("idProducto") int idProducto){
        return new ResponseEntity<>(productoService.productoPorCodigo(idProducto), HttpStatus.OK);
    }
}

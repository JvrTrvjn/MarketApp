
select * from market.clientes;

CREATE DATABASE IF NOT EXISTS market;
USE market;

-- Table structcategoriasure for table categorias
DROP TABLE IF EXISTS categorias;
CREATE TABLE categorias (
  idCategoria INT NOT NULL AUTO_INCREMENT,
  categoria VARCHAR(45) DEFAULT NULL,
  descripcion VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (idCategoria)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table categorias
INSERT INTO categorias (idCategoria, categoria, descripcion) VALUES 
(1,'alimentación','comida rápida, carnes y pescados'),
(2,'deportes','ropa y material deportivo'),
(3,'bricolage','tareas de hogar y automovil'),
(4,'electrónica','televisiones, ordenadores y pequeño electrodoméstico');

-- Table structure for table clientes
DROP TABLE IF EXISTS clientes;
CREATE TABLE clientes (
  usuario VARCHAR(40) NOT NULL,
  password VARCHAR(45) DEFAULT NULL,
  nombre VARCHAR(45) DEFAULT NULL,
  direccion VARCHAR(45) DEFAULT NULL,
  email VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table clientes
INSERT INTO clientes (usuario, password, nombre, direccion, email) VALUES 
('prueba','prueba','prueba','dir prueba','prueba@gmail.com'),
('qqqq','qqqqq','qqqq','qqqqq','qqqqq'),
('user1','user1','usuario1','direccion1','usuario1@gmail.com'),
('user2','user2','usuario2','direccion2','usuario2@gmail.com'),
('user3','user3','usuario 3','el usuario 3','usuario3@gmail.com'),
('yos','yos','yo','fff','rrr');

-- Table structure for table pedidos
DROP TABLE IF EXISTS pedidos;
CREATE TABLE pedidos (
  idPedido INT NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(45) DEFAULT NULL,
  fecha DATETIME DEFAULT NULL,
  estado VARCHAR(15) DEFAULT NULL,
  PRIMARY KEY (idPedido),
  FOREIGN KEY (usuario) REFERENCES clientes(usuario) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='El estado de un pedido puede ser "pendiente" o "entregado"';

-- Dumping data for table pedidos
INSERT INTO pedidos (idPedido, usuario, fecha, estado) VALUES 
(7,'user1','2022-12-11 16:10:30','pendiente'),
(8,'user1','2022-12-11 18:19:27','pendiente'),
(9,'user1','2022-12-11 19:00:43','pendiente'),
(10,'user1','2022-12-11 19:02:47','pendiente'),
(11,'user2','2022-12-20 18:07:57','pendiente'),
(12,'user1','2023-02-14 21:40:21','pendiente'),
(13,'user1','2023-02-14 21:41:24','pendiente'),
(14,'user1','2023-02-18 15:27:55','pendiente'),
(15,'user1','2023-02-19 08:37:58','pendiente'),
(16,'user1','2023-02-19 17:48:46','pendiente'),
(23,'user1','2023-02-23 17:54:00','pendiente'),
(24,'user1','2023-02-23 17:56:59','pendiente'),
(25,'user1','2023-03-03 08:46:07','pendiente'),
(26,'user2','2023-03-03 08:51:15','pendiente'),
(27,'prueba','2023-03-15 16:42:36','pendiente');





-- Table structure for table productos
DROP TABLE IF EXISTS productos;
CREATE TABLE productos (
  idProducto INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) DEFAULT NULL,
  precioUnitario DOUBLE DEFAULT NULL,
  stock INT DEFAULT NULL,
  idCategoria INT DEFAULT NULL,
  PRIMARY KEY (idProducto),
  FOREIGN KEY (idCategoria) REFERENCES categorias(idCategoria) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table productos
INSERT INTO productos (idProducto, nombre, precioUnitario, stock, idCategoria) VALUES 
(1,'tv oled 50\'\'',560,3,4),
(2,'freidora sin aceite',110,3,4),
(3,'macarrones 1kg',1.9,3,1),
(4,'mantequilla',2.3,5,1),
(5,'pack yogures',2.5,14,1),
(6,'pan de molde 500gr',1.8,10,1),
(7,'pelota tenis',2.3,17,2),
(8,'camiseta deporte',14.6,7,2),
(9,'bicicleta 4G',169,3,2),
(10,'guantes de boxeo',29,4,2),
(11,'martillo',12.6,4,3),
(12,'bombilla frenos',7.9,7,3),
(13,'destornillador multiusos',17,2,3);

-- Table structure for table elementospedido
DROP TABLE IF EXISTS elementospedido;
CREATE TABLE elementospedido (
  idElementosPedido INT NOT NULL AUTO_INCREMENT,
  idPedidoFk INT DEFAULT NULL,
  idProductoFk INT DEFAULT NULL,
  unidades INT DEFAULT NULL,
  PRIMARY KEY (idElementosPedido),
  FOREIGN KEY (idPedidoFk) REFERENCES pedidos(idPedido) ON DELETE CASCADE,
  FOREIGN KEY (idProductoFk) REFERENCES productos(idProducto) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Describe el contenido de cada pedido';

-- Dumping data for table elementospedido
INSERT INTO elementospedido (idElementosPedido, idPedidoFk, idProductoFk, unidades) VALUES 
(11,7,5,3),(12,7,4,2),(13,8,5,1),(14,8,4,1),(15,9,3,2),
(16,9,6,1),(17,10,3,2),(18,10,6,1),(19,11,7,2),(20,11,6,1),
(21,12,3,5),(22,13,7,2),(23,13,8,1),(24,13,11,2),(25,14,5,2),
(26,15,12,2),(27,16,2,1),(35,23,7,2),(36,24,5,2),(37,24,2,1),
(38,25,5,2),(39,26,7,2),(40,27,12,1),(41,27,13,2);


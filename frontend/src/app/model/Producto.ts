export class Producto{
    idProducto:number;
    nombre:string;
    precioUnitario:number;
    stock:number;
    idCategoria:number;

    constructor()
    {
        this.idProducto=0;
        this.nombre="";
        this.precioUnitario=0;
        this.stock=0;
        this.idCategoria=0;
    }
}
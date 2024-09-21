export class Producto{
    idProducto:number;
    nombre:string;
    unidades:number;
    precioUnitario:number;
    stock:number;
    idCategoria:number;

    constructor()
    {
        this.idProducto=0;
        this.nombre="";
        this.unidades=0;
        this.precioUnitario=0;
        this.stock=0;
        this.idCategoria=0;
    }
}
import { Producto } from "./Producto";

export class CarritoCompra{
    producto: Producto;
    unidades:number;

    constructor()
    {
        this.proyecto=new Producto();
        this.unidades=0;
    }
}
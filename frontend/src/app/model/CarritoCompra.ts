import { Producto } from "./Producto"; 

export class CarritoCompra{
    producto: Producto;
    unidades:number;

    constructor()
    {
        this.producto=new Producto();
        this.unidades=0;
    }
}

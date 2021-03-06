import { Producto } from '../../productos/models/producto.model';

export class ItemFactura {
    constructor(
        public id:string,
        public cantidad:number,
        public codigo_item:string, 
        public descripcion:string,
        public precio_unitario:number,
        public iva:number,
        public productos: Producto[]
    ){}
}
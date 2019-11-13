import { Cliente } from '../../clientes/models/cliente.model';
import { ItemFactura } from './item-factura.model';
export class Factura {
  constructor(
      public id: string, 
      public tipo_factura: string,
      public numero:string,
      public punto_venta:number,
      public fecha: Date,
      public cliente: Cliente,
      public items:ItemFactura[]) {}
}

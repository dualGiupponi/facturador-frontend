import { Component, OnInit } from "@angular/core";

import { Cliente } from "../../clientes/models/cliente.model";
import { Producto } from "../../productos/models/producto.model";
import { ClienteService } from "../../clientes/service/cliente.service";
import { ProductoService } from "../../productos/service/producto.service";
import { FacturaService } from "../service/factura.service";
import { Factura } from "../models/factura.model";
import { ItemFactura } from "../models/item-factura.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-crear-factura",
  templateUrl: "./crear-factura.component.html",
  styleUrls: ["./crear-factura.component.css"]
})
export class CrearFacturaComponent implements OnInit {
  constructor(
    private router: Router,
    private _httpClientes: ClienteService,
    private _httpProductos: ProductoService,
    private _httpFacturas: FacturaService
  ) {}

  listadoClientes: Cliente[] = [];
  listadoProductos: Producto[] = [];
  //Se inicializa así para poder acceder a los atributos
  facturaForm: Factura = new Factura(
    undefined,
    "",
    "",
    undefined,
    undefined,
    new Cliente(undefined, undefined, undefined, undefined),
    []
  );

  item: ItemFactura = new ItemFactura(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    []
  );

  ngOnInit() {
    this._httpClientes
      .getAllClientes()
      .subscribe(data => (this.listadoClientes = data));
    this._httpProductos
      .getAllProducts()
      .subscribe(data => (this.listadoProductos = data));
  }

  seleccionCliente(cliente: Cliente) {
    this.facturaForm.cliente = cliente;
  }

  seleccionProducto(producto: Producto) {
    this.item.codigo_item = producto.codigo;
    this.item.precio_unitario = producto.precio_unitario;
    this.item.productos.push(producto)
  }

  guardarTransaccion() {
    this.item.iva /= 100
    this.facturaForm.items.push(this.item);
    this.limpiarItem();
    console.log(this.facturaForm)
  }

  limpiarItem() {
    this.item = new ItemFactura(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      []
    );
  }

  eliminarItem(posicion:number){
    this.facturaForm.items.splice(posicion,1)
  }

  sendFactura() {
    this._httpFacturas.createFactura(this.facturaForm).subscribe(data => {
      console.log(data)
      this.router.navigate(["/facturas"]);
    });
  }

}

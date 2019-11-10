import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ProductoService } from "../service/producto.service";
import { Producto } from "../models/producto.model";

@Component({
  selector: "app-crear-actualizar-producto",
  templateUrl: "./crear-actualizar-producto.component.html",
  styleUrls: ["./crear-actualizar-producto.component.css"]
})
export class CrearActualizarProductoComponent implements OnInit {
  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private _httpProductos: ProductoService
  ) {}

  productoForm: Producto = new Producto(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  ngOnInit() {
    if (this.router.url != "/productos/crear") {
      let id: string = this.rutaActiva.snapshot.params.id;
      this._httpProductos.getProduct(id).subscribe(data => {
        this.productoForm = data;
      });
    }
  }
  
  sendProducto() {
    if (this.router.url == "/productos/crear") {
      this.crearProducto();
    } else {
      let id: string = this.rutaActiva.snapshot.params.id;
      this.updateProducto(id);
    }
  }

  crearProducto() {
    this._httpProductos.createProduct(this.productoForm).subscribe(data => {
      this.router.navigate(["/productos"]);
    });
  }

  updateProducto(id: string) {
    this._httpProductos.updateProduct(id, this.productoForm).subscribe(data => {
      this.router.navigate(["/productos"]);
    });
  }
}

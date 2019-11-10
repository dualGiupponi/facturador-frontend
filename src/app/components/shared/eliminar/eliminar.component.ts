import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ClienteService } from "../../clientes/service/cliente.service";
import { ProductoService } from "../../productos/service/producto.service";

@Component({
  selector: "app-eliminar",
  templateUrl: "./eliminar.component.html",
  styleUrls: ["./eliminar.component.css"]
})
export class EliminarComponent implements OnInit {
  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private _httpCliente: ClienteService,
    private _httpProducto: ProductoService
  ) {}

  ngOnInit() {}

  eliminarElemento() {
    let elemento: string = this.rutaActiva.snapshot.url[0].path; //Devuelve si es producto, cliente o factura
    let id: string = this.rutaActiva.snapshot.params.id;
    switch (elemento) {
      case "clientes":
        this._httpCliente
          .destroyCliente(id)
          .subscribe(data => this.router.navigate(["/clientes"]));
        break;
      case "productos":
        this._httpProducto
          .destroyProduct(id)
          .subscribe(data => this.router.navigate(["/productos"]));
        break;
      default:
        break;
    }
  }

  volver() {
    let elemento: string = this.rutaActiva.snapshot.url[0].path; //Devuelve si es producto, cliente o factura
    switch (elemento) {
      case "clientes":
        this.router.navigate(["/clientes"]);
        break;
      case "productos":
        this.router.navigate(["/productos"]);
        break;
      default:
        break;
    }
  }
}

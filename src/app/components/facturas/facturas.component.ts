import { Component, OnInit } from "@angular/core";

import { FacturaService } from "./service/factura.service";
import { Factura } from "./models/factura.model";

@Component({
  selector: "app-facturas",
  templateUrl: "./facturas.component.html",
  styleUrls: ["./facturas.component.css"]
})
export class FacturasComponent implements OnInit {
  constructor(private _httpFacturas: FacturaService) {}

  listadoFacturas: Factura[] = [];

  ngOnInit() {
    this._httpFacturas.AllFacturas().subscribe(data => {
      this.listadoFacturas = data;
    });
  }
}

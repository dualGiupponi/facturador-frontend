import { Component, OnInit } from '@angular/core';

import { Producto } from './models/producto.model';
import { ProductoService } from './service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private _httpProductos:ProductoService) { }

  listadoProductos:Producto[] = []

  ngOnInit() {
    this._httpProductos.getAllProducts().subscribe(data => this.listadoProductos = data)
  }

}

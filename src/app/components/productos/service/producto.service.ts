import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "../models/producto.model";

@Injectable({
  providedIn: "root"
})
export class ProductoService {
  url: string = 'http://localhost:4000/producto';
  constructor(private _httpProducto: HttpClient) {}

  getAllProducts(): Observable<Producto[]> {
    return this._httpProducto.get<Producto[]>(this.url);
  }

  getProduct(id: string): Observable<Producto> {
    return this._httpProducto.get<Producto>(`${this.url}/${id}`);
  }

  updateProduct(id: string, producto: Producto): Observable<Producto> {
    return this._httpProducto.put<Producto>(`${this.url}/${id}`, producto);
  }

  createProduct(producto: Producto): Observable<Producto> {
    return this._httpProducto.post<Producto>(this.url, producto);
  }

  destroyProduct(id: string): Observable<any> {
    return this._httpProducto.delete(`${this.url}/${id}`);
  }
}

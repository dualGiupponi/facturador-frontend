import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Factura } from '../models/factura.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private _httpFacturas:HttpClient) { }

  url:string = 'http://localhost:4000/factura';

  AllFacturas():Observable<Factura[]>{
    return this._httpFacturas.get<Factura[]>(this.url)
  }

  getFactura(id:string):Observable<Factura>{
    return this._httpFacturas.get<Factura>(`${this.url}/${id}`)
  }

  createFactura(newFactura:Factura):Observable<Factura>{
    return this._httpFacturas.post<Factura>(this.url, newFactura)
  }

  deleteFactura(id:string):Observable<Factura>{
    return this._httpFacturas.delete<Factura>(`${this.url}/${id}`)
  }

}

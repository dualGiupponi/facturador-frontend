import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = 'http://localhost:4000/cliente'
  
  constructor(private _httpClientes: HttpClient) { }

  getAllClientes(): Observable<Cliente[]>{
    return this._httpClientes.get<Cliente[]>(this.url)
  }

  getCliente(id:string):Observable<Cliente>{
    return this._httpClientes.get<Cliente>(`${this.url}/${id}`)
  }

  createCliente(data:Cliente):Observable<Cliente>{
    return this._httpClientes.post<Cliente>(this.url,data)
  }

  updateCliente(id:string, data:Cliente): Observable<Cliente>{
    data.updatedAt = undefined
    return this._httpClientes.put<Cliente>(`${this.url}/${id}`, data)
  }

  destroyCliente(id:string){
    return this._httpClientes.delete(`${this.url}/${id}`)
  }

}

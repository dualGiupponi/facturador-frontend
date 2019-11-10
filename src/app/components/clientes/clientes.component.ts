import { Component, OnInit } from '@angular/core';

import { ClienteService } from './service/cliente.service';
import { Cliente } from './models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private _httpClientes:ClienteService) { }

  listadoClientes:Cliente[] = []

  ngOnInit() {
    this._httpClientes.getAllClientes().subscribe(data => {
      this.listadoClientes = data
    })
  }

}

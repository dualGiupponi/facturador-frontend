import { Component, OnInit } from '@angular/core';

import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private _httpClientes:ClienteService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute, private _httpClientes:ClienteService) { }

  clientePerfil:Cliente = new Cliente(undefined, undefined, undefined, undefined);

  ngOnInit() {
    const idCliente:string = this.rutaActiva.snapshot.params.id
    this._httpClientes.getCliente(idCliente).subscribe(data => this.clientePerfil = data)
  }

}

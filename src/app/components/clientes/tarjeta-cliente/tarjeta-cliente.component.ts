import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-tarjeta-cliente',
  templateUrl: './tarjeta-cliente.component.html',
  styleUrls: ['./tarjeta-cliente.component.css']
})
export class TarjetaClienteComponent implements OnInit {

  constructor(private router:Router) { }

  @Input() clienteCard:Cliente

  ngOnInit() {
  }

  verPerfilCliente() {
    
  }

}

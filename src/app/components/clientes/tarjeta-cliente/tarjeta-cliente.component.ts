import { Component, OnInit, Input } from '@angular/core';

import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-tarjeta-cliente',
  templateUrl: './tarjeta-cliente.component.html',
  styleUrls: ['./tarjeta-cliente.component.css']
})
export class TarjetaClienteComponent implements OnInit {

  constructor() { }

  @Input() clienteCard:Cliente

  ngOnInit() {
    if(this.clienteCard.imageCliente == null){
      this.clienteCard.imageCliente = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqWv32vX2afuf65HUGvqUKxXlPFys5xPtn2nkDdOpwBvJv1su&s"
    }
  }

}

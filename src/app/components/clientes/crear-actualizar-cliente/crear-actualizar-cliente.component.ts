import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Cliente } from "../models/cliente.model";
import { ClienteService } from "../service/cliente.service";

@Component({
  selector: "app-crear-actualizar-cliente",
  templateUrl: "./crear-actualizar-cliente.component.html",
  styleUrls: ["./crear-actualizar-cliente.component.css"]
})
export class CrearActualizarClienteComponent implements OnInit {
  constructor(
    private _httpClientes: ClienteService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  @Input() clienteForm: Cliente = new Cliente(
    undefined,
    undefined,
    undefined,
    undefined
  );

  ngOnInit() {
    if(this.router.url != "/clientes/crear"){
      let id:string = this.rutaActiva.snapshot.params.id
      this._httpClientes.getCliente(id).subscribe(data => this.clienteForm = data)
    }
  }

  sendCliente() {
    if (this.router.url == "/clientes/crear") {
      this.crearCliente();
    } else {
      let id: string = this.rutaActiva.snapshot.params.id;
      this.updateCliente(id);
    }
  }

  crearCliente() {
    this._httpClientes.createCliente(this.clienteForm).subscribe(data => {
      this.router.navigate(["/clientes"]);
    });
  }

  updateCliente(id: string) {
    this._httpClientes.updateCliente(id, this.clienteForm).subscribe(data => {
      this.router.navigate(["/clientes"]);
    });
  }
}

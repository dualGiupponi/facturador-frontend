import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClienteService } from '../../clientes/service/cliente.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute, private _httpCliente:ClienteService, private router:Router) { }

  ngOnInit() {
  }

  eliminarElemento(){
    let elemento:string = this.rutaActiva.snapshot.url[0].path //Devuelve si es producto, cliente o factura
    switch (elemento) {
      case 'clientes':
          let id:string = this.rutaActiva.snapshot.params.id
          this._httpCliente.destroyCliente(id).subscribe(data => this.router.navigate(['/clientes']))
        break;
    
      default:
        break;
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClientes: HttpClient) { }

  listadoClientes:Cliente[] = [
    new Cliente(
      'adsadasdasd',
      'Pablo Marmol',
      '11 de Noviembre 975',
      '1231234324123'
    ),
    new Cliente(
      'adsadasdasd',
      'Hernan Gomez',
      'Pasaje Iriarte 870',
      '145323466'
    ),
    new Cliente(
      'adsadasdasd',
      'Pedro Pablo',
      'Av. Gral Paz 750',
      'sdsadasdad'
    ),
  ]

}

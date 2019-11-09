import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { TarjetaClienteComponent } from './components/clientes/tarjeta-cliente/tarjeta-cliente.component';
import { PerfilClienteComponent } from './components/clientes/perfil-cliente/perfil-cliente.component';
import { EliminarComponent } from './components/shared/eliminar/eliminar.component';
import { CrearActualizarClienteComponent } from './components/clientes/crear-actualizar-cliente/crear-actualizar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    ClientesComponent,
    FacturasComponent,
    TarjetaClienteComponent,
    PerfilClienteComponent,
    EliminarComponent,
    CrearActualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductosComponent } from "./components/productos/productos.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { FacturasComponent } from "./components/facturas/facturas.component";
import { PerfilClienteComponent } from './components/clientes/perfil-cliente/perfil-cliente.component';
import { EliminarComponent } from './components/shared/eliminar/eliminar.component';
import { CrearActualizarClienteComponent } from './components/clientes/crear-actualizar-cliente/crear-actualizar-cliente.component';

const routes: Routes = [
  //Ruta Home
  {
    path: "",
    redirectTo: "clientes",
    pathMatch: "full"
  },
  //Rutas clientes
  {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path:"clientes/crear",
    component: CrearActualizarClienteComponent
  },
  {
    path:"clientes/eliminar/:id",
    component: EliminarComponent
  },
  {
    path:"clientes/actualizar/:id",
    component: CrearActualizarClienteComponent
  },
  {
    path: "clientes/:id",
    component: PerfilClienteComponent
  },
  //Rutas productos
  {
    path: "productos",
    component: ProductosComponent
  },
  {
    path: "facturas",
    component: FacturasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

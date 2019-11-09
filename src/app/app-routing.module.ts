import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductosComponent } from "./components/productos/productos.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { FacturasComponent } from "./components/facturas/facturas.component";

const routes: Routes = [
  {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path: "",
    redirectTo: "clientes",
    pathMatch: "full"
  },
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/privado/inicio/inicio.component';
import { DashboardComponent } from './pages/privado/dashboard/dashboard.component';
import { LoginComponent } from './pages/privado/login/login.component';
import { VentasComponent } from './pages/privado/ventas/ventas.component';
import { ProductosComponent } from './pages/privado/productos/productos.component';
import { ConfiguracionComponent } from './pages/privado/configuracion/configuracion.component';
import { SeguimientoComponent } from './pages/publico/seguimiento/seguimiento.component';
import { ClientesComponent } from './pages/privado/clientes/clientes.component';

const routes: Routes = [
  {
    path: 'seguimiento/:id',
    component: SeguimientoComponent,
  },
  {
    path: '',
    component: InicioComponent,
    children:[
      {
        path: 'Dashboard',
        component: DashboardComponent,
      },
      {
        path: 'ventas',
        component: VentasComponent,
      }, 
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'configuracion',
        component: ConfiguracionComponent,
      },
      {
        path: 'clientes',
        component: ClientesComponent,
      },
      {
        path: '**',
        component: LoginComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

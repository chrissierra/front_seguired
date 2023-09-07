import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/privado/inicio/inicio.component';
import { LoginComponent } from './pages/privado/login/login.component';
import { NuevaVentaComponent } from './pages/privado/nueva-venta/nueva-venta.component';
import { NuevoClienteComponent } from './pages/privado/nuevo-cliente/nuevo-cliente.component';
import { NuevoProductoComponent } from './pages/privado/nuevo-producto/nuevo-producto.component';
import { NuevoTipoProductoComponent } from './pages/privado/nuevo-tipo-producto/nuevo-tipo-producto.component';
import { NuevaEntregaComponent } from './pages/privado/nueva-entrega/nueva-entrega.component';
import { NuevoPasoComponent } from './pages/privado/nuevo-paso/nuevo-paso.component';
import { DashboardComponent } from './pages/privado/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { VentasComponent } from './pages/privado/ventas/ventas.component';
import { NavbarComponent } from './pages/shared/privado/navbar/navbar.component';


// Externas:
import { Ng2CompleterModule } from "ng2-completer";
import { ProductosComponent } from './pages/privado/productos/productos.component';
import { ListarProductosComponent } from './pages/privado/listar-productos/listar-productos.component';
import { ProductoUnitarioComponent } from './pages/privado/producto-unitario/producto-unitario.component';
import { CarritoVentaComponent } from './pages/privado/carrito-venta/carrito-venta.component';
import { FinalizarVentaComponent } from './pages/privado/nueva-venta/finalizar-venta/finalizar-venta.component';
import { ListarVentasComponent } from './pages/privado/ventas/listar-ventas/listar-ventas.component';
import { UnitariaComponent } from './pages/privado/ventas/unitaria/unitaria.component';
import { ConfiguracionComponent } from './pages/privado/configuracion/configuracion.component';
import { PasosComponent } from './pages/privado/configuracion/pasos/pasos.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    NuevaVentaComponent,
    NuevoClienteComponent,
    NuevoProductoComponent,
    NuevoTipoProductoComponent,
    NuevaEntregaComponent,
    NuevoPasoComponent,
    DashboardComponent,
    VentasComponent,
    NavbarComponent,
    ProductosComponent,
    ListarProductosComponent,
    ProductoUnitarioComponent,
    CarritoVentaComponent,
    FinalizarVentaComponent,
    ListarVentasComponent,
    UnitariaComponent,
    ConfiguracionComponent,
    PasosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

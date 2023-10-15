import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { UtilsService } from 'src/app/services/utils.service';
import { subNavegacion } from './nueva-venta.enum';
import { Observable } from 'rxjs';
import { VentaService } from 'src/app/services/venta.service';
import { ERRORES_NUEVA_VENTA } from './nueva-venta.errores';
import { ErroresService } from 'src/app/services/errores.service';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.scss']
})
export class NuevaVentaComponent implements OnInit {
  public venta: any = {cliente: '', clientes: []};
  public subnavegacion: any = structuredClone(subNavegacion);
  public vistaLista: boolean = false;
  public mostrarCarritoVenta: boolean = false;
  public productosSeleccionados: any = [];
  public carritoVenta: any;
  public clientes: any = {};
  public error: any;
  constructor(public clientesService: ClientesService, private utils: UtilsService, private ventaService: VentaService, private errorService: ErroresService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.obtenerClientes();
      this.venta['clientes'] = this.clientes['todos'].map( (v: any) => v.rut );
      this.vistaLista = true;
    } catch (e) {
      this.errorService.catchingError(e)
    }
  }

  async obtenerClientes() {
    try {
      this.clientes['todos'] = await this.clientesService.getClientes();
      this.clientes['by_rut'] = await this.clientesService.setClientes(this.clientes['todos']);
    } catch (e) {
      this.errorService.setError(ERRORES_NUEVA_VENTA.ERROR_OBTENIENDO_CLIENTES, e);
    }
  }

  subNavegar(donde: string) {
    try {    
      this.subnavegacion[donde] = true;
      this.subnavegacion = this.utils.todasFalsasExcepto(this.subnavegacion, donde);
    } catch (error) {
      console.error(`NuevaVentaComponent.subNavegar: error `, {error});
    }
  }

  avanzar(donde: string) {
    try {
      this.subNavegar(donde);
    } catch (error) {
      console.error(error);
    }
  }

  ingresar() {
    try {
      const cliente = this.clientes['by_rut'][this.venta['cliente']];
      this.ventaService.ingresarVenta({venta: this.venta, productosSeleccionados: this.productosSeleccionados, cliente, carritoVenta: this.carritoVenta});
    } catch (error) {
      console.error(error);
    }
  }

  onProductoSeleccionado(producto: any) {
    try {      
      this.mostrarCarrito();
      this.productosSeleccionados.push(producto);
    } catch (error) {
      console.error(error);
    }
  }

  mostrarCarrito() {
    this.mostrarCarritoVenta = true;
  }

  onEliminarItem(producto: any) {
    this.productosSeleccionados = producto;
  }

  cerrarCarritoVenta(e: any) {
    this.mostrarCarritoVenta = false;
  }

  onUpdateProductoSimplificado(e: Observable<any>) {
    e.subscribe(d => this.carritoVenta = d);
  }
}

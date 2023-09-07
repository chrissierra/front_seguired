import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-carrito-venta',
  templateUrl: './carrito-venta.component.html',
  styleUrls: ['./carrito-venta.component.scss']
})
export class CarritoVentaComponent {

 /*  private productos: any; */
  private productos$: Subject<any>;
  @Input() lateral: boolean = true;
  @Output() onCerrar= new EventEmitter<any>();
  @Output() onEliminarItem= new EventEmitter<any>();
  @Output() onUpdateProductoSimplificado = new EventEmitter<any>();
  @Input() productos: any = [];
  constructor(private utils: UtilsService) {
    this.productos$ = new Subject()
  }
  cerrar(): void {
    this.onCerrar.emit('cerrar');
  }

  get productosCarrito() {
    const idsUnicos: any = Array.from(new Set(this.productos.map((v: any) => v.id)));
    const cuentaCadaUno: any = {};
    idsUnicos.forEach((idDelProducto: any) => {
      const cantidad = this.productos.filter( (v: any) => v.id === idDelProducto).length;
      cuentaCadaUno[idDelProducto] = cantidad;
    });
    const productosCarrito = this.utils.eliminarDuplicados(this.productos);
    for (const producto of productosCarrito) {
      producto['cantidad'] = cuentaCadaUno[producto.id];
      producto['subtotal'] = cuentaCadaUno[producto.id] * parseFloat(producto.precio);
    }
    this.agregarProducto({productosCarrito, total: this.totalCarrito, cantidad: this.qCarrito});
    this.onUpdateProductoSimplificado.emit(this.getProductos());
    return productosCarrito;
  }

  get totalCarrito() {
    const total = this.productos.reduce(  ( previo: any, actual: any ) => {
      return previo + parseInt(actual.precio)
    }, 0);
    return total;
  }

  get qCarrito() {
    return this.productos.length;
  }

  eliminar(productoPorEliminar: any) {
    try {
      this.productos = this.productos.filter( (producto: any) => {
        if(productoPorEliminar.id !== producto.id){
          return producto;
        }
      });
      this.onEliminarItem.emit(this.productos);
    } catch (error) {
      console.error(`eliminar`, {error})
    }
  }

  modificarCantidad(productoPorModificar: any, operacion: string) {
    try {
      switch (operacion) {
        case 'restar':
          const indice = this.productos.findIndex((producto: any) => producto.id ===  productoPorModificar.id);
          if (indice !== -1) {
            this.productos.splice(indice, 1);
          }
          break;        
        case 'sumar':
          this.productos.push(productoPorModificar);
          break;      
        default:
          break;
      }      
      this.onEliminarItem.emit(this.productos);
    } catch (error) {
      throw error;
    }
  }

  agregarProducto(producto: any){
    this.productos$.next(producto);
  }

  getProductos(): Observable<any[]>{
    return this.productos$.asObservable();
  }


}

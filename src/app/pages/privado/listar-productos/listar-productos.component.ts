import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit {
  public productos: any;
  @Output() onProductoSeleccionado = new EventEmitter<any>();
  constructor(private productoService: ProductoService) {}
  async ngOnInit(): Promise<void> {
    try {
      this.productos = await this.productoService.getProductos();
    } catch (error) {
      console.log(`ListarProductosComponent.error`, {error})      
    }
  }

  eligiendoProducto(producto: any) {
    try {
      this.onProductoSeleccionado.emit(producto);
    } catch (error) {
      console.log(`ListarProductosComponent.error`, {error});
    }
  }

}

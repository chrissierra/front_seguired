import { Component, OnInit } from '@angular/core';
import { subNavegacion } from './productos.enum';
import { ProductoService } from 'src/app/services/producto.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public productos: any;
  public producto: any;
  public subnavegacion: any = subNavegacion;
  constructor(private productoService: ProductoService, private utils: UtilsService) {}
  ngOnInit(): void {
    try {
      this.productos = this.productoService.getProductos();
      console.log(`ProductosComponent.ngOnInit: getproductos`, {productos: this.productos})
    } catch (error) {
      console.error(`ProductosComponent.ngOnInit: error `, {error});
    }
  }
  subNavegar(donde: string) {
    try {    
      this.subnavegacion[donde] = true;
      this.subnavegacion = this.utils.todasFalsasExcepto(this.subnavegacion, donde);
    } catch (error) {
      console.error(`ProductosComponent.subNavegar: error `, {error});
    }
  }

  onProductoSeleccionado(producto: any) {
    try {
      console.log(`[ProductosComponent.onProductoSeleccionado]`, {producto});
      this.producto = producto;
      this.subNavegar('productoUnitario');
    } catch (error) {
      console.error(`ProductosComponent: onProductoSeleccionado `, {error});
    }
  }

}

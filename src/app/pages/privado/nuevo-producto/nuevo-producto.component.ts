import { Component } from '@angular/core';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent {
  public producto: any = {nombre: '', mapa_tipo_objetos: {}};
  public vistaLista: boolean = false;
  constructor(private tipoProductoService: TipoProductoService) {}
  async ngOnInit(): Promise<void> {
    try {
      this.vistaLista = true;
      const tipoProductos: any = await this.tipoProductoService.getTiposProductos();
      this.producto['tipo_productos'] = tipoProductos.map( (v: any) => {
        this.producto['mapa_tipo_objetos'][v.tipo_producto] = v.id 
        return v.tipo_producto 
      });
    } catch (error) {
      console.error(`[NuevaproductoComponent : Error ]`, {error});
    }
  }

  ingresar() {
    try {
      console.log(`[ingresar]`, {producto: this.producto});
    } catch (error) {
      console.error(`[NuevoProductoComponent.ingresar Error]`, {error})
    }
  }
}

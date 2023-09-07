import { Component, Input } from '@angular/core';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
@Component({
  selector: 'app-producto-unitario',
  templateUrl: './producto-unitario.component.html',
  styleUrls: ['./producto-unitario.component.scss']
})
export class ProductoUnitarioComponent {
  @Input() producto: any = {nombre: '', mapa_tipo_objetos: {}};;
  public vistaLista: boolean = false;
  constructor(private tipoProductoService: TipoProductoService) {}
  async ngOnInit(): Promise<void> {
    try {
      this.vistaLista = true;
      this.producto['mapa_tipo_objetos'] = {}
      this.producto['tipo_productos'] = await this._setTiposProductos();
      this._setNombreTipoProducto();
    } catch (error) {
      console.error(`[NuevaproductoComponent : Error ]`, {error});
    }
  }
  async _setTiposProductos() {
    try {
      const tipoProductos: any = await this.tipoProductoService.getTiposProductos();
      return tipoProductos.map( (v: any) => {
        this.producto['mapa_tipo_objetos'][v.id] = v;        
        return v.tipo_producto;
      });
    } catch (error) {
      throw error;
    }
  }
  _setNombreTipoProducto() {
    try {
      const { id } = this.producto['tipo_producto'];
      const { tipo_producto } =  this.producto['mapa_tipo_objetos'][id];
      this.producto['tipo_producto'] = tipo_producto;      
    } catch (error) {
      throw error;
    }
  }
  editar() {
    throw new Error('No implementado aun')
  }
}

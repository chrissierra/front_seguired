import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';
import { subNavegacion } from './listar-ventas.enum';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.scss']
})
export class ListarVentasComponent implements OnInit{
  public ventas: any;
  public subnavegacion: any = subNavegacion;
  public venta: any;
  constructor(private ventasService: VentaService, private utils: UtilsService) {}
  async ngOnInit(): Promise<void> {
    try {
      this.ventas = await this.ventasService.getVentas();
      console.log(`ngOnInit`, {ventas: this.ventas})
    } catch (error) {
      console.error(error)
    }
  }

  visualizar(venta: any) {
    this.venta = venta;
    this.subNavegar('unitaria');
    console.log(venta);
  }

  subNavegar(donde: string) {
    try {    
      this.subnavegacion[donde] = true;
      this.subnavegacion = this.utils.todasFalsasExcepto(this.subnavegacion, donde);
    } catch (error) {
      console.error(`ListarVentasComponent.subNavegar: error `, {error});
    }
  }

}

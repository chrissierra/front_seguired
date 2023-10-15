import { Component } from '@angular/core';
import { NOMBRES_SUBNAVEGACION, subNavegacion } from './clientes.enum';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  public nombresSubnavegacion: any = NOMBRES_SUBNAVEGACION;
  public subnavegacion: any = structuredClone(subNavegacion);
  public llavesSubnavegacion: any = Object.keys(this.subnavegacion);
  constructor(private utils: UtilsService) {}
  subNavegar(donde: string) {
    try {    
      this.subnavegacion[donde] = true;
      this.subnavegacion = this.utils.todasFalsasExcepto(this.subnavegacion, donde);
    } catch (error) {
      console.error(`ClientesComponent.subNavegar: error `, {error});
    }
  }
}

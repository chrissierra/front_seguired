import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { subNavegacion } from './configuracion.enum';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent {
  public subnavegacion: any = subNavegacion;
  constructor(private utils: UtilsService) {}
  subNavegar(donde: string) {
    try {    
      this.subnavegacion[donde] = true;
      this.subnavegacion = this.utils.todasFalsasExcepto(this.subnavegacion, donde);
    } catch (error) {
      console.error(`ConfiguracionComponent.subNavegar: error `, {error});
    }
  }
}

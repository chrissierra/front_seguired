import { Component } from '@angular/core';
import { subNavegacion } from './ventas.enum';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent {
  public subnavegacion: any = JSON.parse(JSON.stringify(subNavegacion));
  constructor(private utils: UtilsService) {}
  subNavegar(donde: string) {
    try {    
      this.subnavegacion[donde] = true;
      this.subnavegacion = this.utils.todasFalsasExcepto(this.subnavegacion, donde);
    } catch (error) {
      console.error(`VentasComponent.subNavegar: error `, {error});
    }
  }
}

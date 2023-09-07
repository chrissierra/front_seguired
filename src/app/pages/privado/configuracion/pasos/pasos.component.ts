import { Component } from '@angular/core';
import { PasoService } from 'src/app/services/paso.service';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent {
  public pasos: any = {nombrePaso: ''}
  constructor(private pasoService: PasoService) {}

  async ingresar() {
    try {
      const response = await this.pasoService.ingresarPasoEstandar(this.pasos['nombrePaso']);
      console.log(`[ingresarPasoEstandar]`, {response})
    } catch (error) {
      console.error(error);
    }
  }
}

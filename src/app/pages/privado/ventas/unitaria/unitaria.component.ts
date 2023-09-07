import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PasoService } from 'src/app/services/paso.service';

@Component({
  selector: 'app-unitaria',
  templateUrl: './unitaria.component.html',
  styleUrls: ['./unitaria.component.scss']
})
export class UnitariaComponent implements OnInit {
  @Input() venta: any;
  @Output() onVolver= new EventEmitter<any>();
  constructor(private pasosService: PasoService) {}
  
  async ngOnInit(): Promise<void> {
    try {
      console.log(`UnitariaComponent`, {venta: this.venta});
      const pasosEstandar: any = await this.pasosService.getPasosEstandar();
      this.venta['pasosEstandarHashMapByNombre'] = {};
      const nombres = pasosEstandar.map( (v:any)=> {
        this.venta['pasosEstandarHashMapByNombre'][v.nombre] = v.id;
        return v.nombre;
      });
      this.venta['pasos_estandar'] = nombres;
    } catch (error) {
      console.error(error);
    }
  }

  volver() {
    this.onVolver.emit('volver');
  }

  async ingresar() {
    try {
      /* 
      "id_paso_estandar": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "caracteristicas": "string",
      "ordinalidad": "string"
      "entrega_id": {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"  }
      */
      const ordinalidad = this.venta['ordinalidadPaso']
      const pasoSeleccionadoEnCurso = this.venta['pasoSeleccionadoEnCurso'];
      const id_paso_estandar = this.venta['pasosEstandarHashMapByNombre'][pasoSeleccionadoEnCurso];
      const entrega_id = this.venta.entrega_id;
      const pasos = {
        id_paso_estandar,
        caracteristicas: '',
        ordinalidad
        
      }
      const response = await this.pasosService.ingresarPaso(pasos, entrega_id);
      console.log(`ingresar`, {response})
    } catch (error) {
      console.error(error);
    }
  }


}

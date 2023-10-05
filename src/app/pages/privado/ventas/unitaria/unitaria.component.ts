import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PasoService } from 'src/app/services/paso.service';
import { VISTAS, subMenu } from './unitaria.constant'
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-unitaria',
  templateUrl: './unitaria.component.html',
  styleUrls: ['./unitaria.component.scss']
})
export class UnitariaComponent implements OnInit, AfterViewInit {
  @Input() venta: any;
  @Output() onVolver= new EventEmitter<any>();
  menu: any = subMenu;
  _ultimoPasoIngresado: any;
  vistas: any = VISTAS;
  constructor(private pasosService: PasoService, private utils: UtilsService) {}
  async ngAfterViewInit(): Promise<void> {
    try {
      await this.setPasosEstandar();
      await this.setPasos();
    } catch (error) {
      console.error(error);
    }
  }

  set ultimoPasoIngresado(valor: any) {
    const [entrega] = valor?.entregas;
    const {pasos} = entrega;
    console.log({pasos})
    const ordinalidad = pasos.map((v: any) => parseInt(v.ordinalidad) ).sort((a: any, b: any) => a - b);    
    this._ultimoPasoIngresado = ordinalidad.pop() ?? 0;
  }

  async setPasos() {
    try {      
      this.ultimoPasoIngresado = this.venta;
      this.venta['ordinalidadPaso'] = this._ultimoPasoIngresado + 1;
      console.log(`UnitariaComponent`, {venta: this.venta, _ultimoPasoIngresado: this._ultimoPasoIngresado});
    } catch (error) {
      throw error;
    }
  }

  async setPasosEstandar() {
    try {
      const pasosEstandar: any = await this.pasosService.getPasosEstandar();
      this.venta['pasosEstandarHashMapByNombre'] = {};
      this.venta['pasosEstandarHashMapById'] = {};
      const nombres = pasosEstandar.map( (v:any)=> {
        this.venta['pasosEstandarHashMapByNombre'][v.nombre] = v.id;
        this.venta['pasosEstandarHashMapById'][v.id] = v.nombre;
        return v.nombre;
      });
      this.venta['pasos_estandar'] = nombres;
    } catch (error) {
      throw error;
    }
  }
  
  async ngOnInit(): Promise<void> {
  
  }

  volver() {
    this.onVolver.emit('volver');
  }

  async ingresar() {
    try {
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
      this.venta['ordinalidadPaso']++;
      console.log(`ingresar`, {response});
    } catch (error) {
      console.error(error);
    }
  }

  cambiandoPestania(e: any) {
    console.log(`[cambiandoPestania]`, {e});
    this.vistas = this.utils.todasFalsasExcepto(this.vistas, e.nombre);
  }


}

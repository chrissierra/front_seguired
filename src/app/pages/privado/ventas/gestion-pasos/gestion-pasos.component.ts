import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PasoService } from 'src/app/services/paso.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ESTADOS, NOMBRE_ESTADOS } from './gestion-pasos.constant';

@Component({
  selector: 'app-gestion-pasos',
  templateUrl: './gestion-pasos.component.html',
  styleUrls: ['./gestion-pasos.component.scss']
})
export class GestionPasosComponent implements OnInit, AfterViewInit {

  @Input() venta: any;
  pasos: any;
  pasosEstandar: any;
  mostrarPasos: boolean = false;
  estadosDeLosPasos: any = ESTADOS;
  constructor(private pasoService: PasoService, private util: UtilsService) {}

  ngAfterViewInit(): void {}

  setPasos() {
    try {
      let estaInicializado = false;
      this.pasos = this.util.ordenarPorOrdinalidad(this.venta.entregas[0].pasos);
      this.pasosEstandar = this.venta.pasosEstandarHashMapById;
      this.pasos = this.pasos.map( (paso: any, _: number) => {
        if(paso.en_curso){
          estaInicializado = true;
          paso.caracteristicas = { estado: NOMBRE_ESTADOS.EJECUTADO }
        } 
        if(!estaInicializado && !paso.en_curso){
          paso.caracteristicas = { estado: NOMBRE_ESTADOS.EJECUTADO}
        }
        if(estaInicializado && !paso.en_curso){
          paso.caracteristicas = { estado: NOMBRE_ESTADOS.PENDIENTE }
        }
        paso['nombrePaso'] = this.pasosEstandar[paso.id_paso_estandar];
        return paso;
      });
      if(!estaInicializado) {
        this.pasos[0].en_curso = true;
        this.pasoService.updatePasoById(this.pasos[0].id, this.pasos[0]);
        this.setPasos();
      }
      this.mostrarPasos = true;
    } catch (error) {
      console.error(`[SetPasos Error]`, {error});
      throw error;
    }
  }

  ngOnInit(): void {
    try {
      this.setPasos();
      console.log(`[onInit]`, {venta: this.venta, pasos: this.pasos, pasosEstandarMap: this.pasosEstandar });
    } catch (error) {
      console.error(`[GestionPasosComponent: OnInit: ERROR ]`, {error} )
    }
  }

  async activarPaso(_: any, id: number) {
    this.mostrarPasos = false;
    try {
      this.pasos = this.util.todasFalsasExcepto(this.pasos, 'en_curso', id);

      for await(const paso of this.pasos) {        
        await this.pasoService.updatePasoById(paso.id, paso);
      }

      this.setPasos();
      this.mostrarPasos = true;


    } catch (error) {
      console.error(`[ activarPaso: error ]`, {error})
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';
import { ERRORES, NOMBRE_ERRORES } from './seguimiento.errores';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {
  _idSeguimiento: string | null = '';
  venta: any;
  error: any = false;
  pasos: any;
  constructor(private activatedRoutes: ActivatedRoute, private ventaService: VentaService) {}

  get idSeguimiento() {
    if(this._idSeguimiento) return this._idSeguimiento;
    this._idSeguimiento = this.activatedRoutes.snapshot.paramMap.get('id');
    return this._idSeguimiento;
  }

  async ngOnInit(): Promise<void> {
    try {    
      await this.setVenta();
      await this.setPasos();
      console.log(`[SeguimientoComponent]`, {id: this.idSeguimiento, venta: this.venta })
    } catch (error) {
      this.error = error;
    } 
  }

  async setPasos() {
    try {
      this.pasos = this.venta.entregas[0].pasos;
      if(this.pasos.length === 0 ) throw ERRORES[NOMBRE_ERRORES.SIN_PASOS_INGRESADOS];
    } catch (error) {
      throw ERRORES[NOMBRE_ERRORES.SIN_PASOS_INGRESADOS];
    }
  }

  async setVenta() {
    try {
      this.venta = await this.ventaService.getVentaById(this.idSeguimiento!);
    } catch (error) {
      throw ERRORES[NOMBRE_ERRORES.ID_EQUIVOCADO];
    }
  }
  





}

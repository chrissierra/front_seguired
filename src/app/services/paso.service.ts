import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasoService {

  constructor(private http: HttpClient) { }


  /** 
  {
    "id_usuario": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "nombre": "string"
  }
  */
  async ingresarPasoEstandar(nombre: string) {
    try {
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      const url = `http://localhost:8000/api/paso-estandar`;
     
      const body = {
        id_usuario: usuario.id,
        nombre
      }
      const response = await lastValueFrom(this.http.post(url, body));
      return response;
    } catch (error) {
      throw error;
    }
  }

  async ingresarPaso(paso: any, id: any) {
    try {
      const url = `http://localhost:8000/api/pasos`;
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      paso.id_usuario = usuario.id;
      const entrega_id = {id}
      console.log(`[ingresarPaso]`, {paso, entrega_id});
      const body = {
        paso, entrega_id
      }
      const response = await lastValueFrom(this.http.post(url, body));
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getPasosEstandar() {
    try {    
      let url = `http://localhost:8000/api/pasos-estandar/{usuario_id}`;
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      url = url.replace(`{usuario_id}`, usuario.id);
      const response = await lastValueFrom(this.http.get(url));
      console.log(`[PasoService.getPasosEstandar:  ]`, {response});
      return response;
    } catch (error) {
      console.error(`[PasoService.getPasosEstandar: ERROR ]`, {error});
      throw error;
    }
  }

  async updatePasoById(id: string, body: any) {
    try {
      console.log(`[Actualizando en: updatePasoById ]`, {id});
      let url = `http://localhost:8000/api/pasos/{id}`;
      url = url.replace(`{id}`, id);
      body.caracteristicas = JSON.stringify(body.caracteristicas);
      const response = await lastValueFrom(this.http.put(url, body));
      console.log(`[PasoService.getPasosEstandar:  ]`, {response});
      return response;
    } catch (error) {
      console.error(`[updatePasoById: ERROR ]`, {error});
      throw error;
    }
  }

  async setPasosEstandarHashById() {
    try {
      const pasosEstandar: any = await this.getPasosEstandar();
      const mapas: any = {
        pasosEstandarHashMapByNombre: {},
        pasosEstandarHashMapById: {}
      }
      pasosEstandar.forEach( (v:any)=> {
        mapas['pasosEstandarHashMapByNombre'][v.nombre] = v.id;
        mapas['pasosEstandarHashMapById'][v.id] = v.nombre;
      });
      return mapas;
    } catch (error) {
      console.error(`[error: setPasosEstandarHashById]`, {error});
      throw error;
    }
  }
  

}

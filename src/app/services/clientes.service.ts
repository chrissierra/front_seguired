import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public clientes: any;
  constructor(private http: HttpClient) { }

  async getClientes() {
    try {    
      let url = `http://localhost:8000/api/clientes-por-usuario/{usuario_id}`;
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      url = url.replace(`{usuario_id}`, usuario.id);
      const response = await lastValueFrom(this.http.get(url));
      this.setClientes(response);
      return response;
    } catch (error) {
      console.error(`[ClientesService.getClientes: ERROR ]`, {error});
      throw error;
    }
  }

  setClientes(clientes: any) {
    try {
      // const clientes = structuredClone(this.clientes);
      const response: any = {};
      clientes.forEach((cliente: any) => {
        response[cliente.rut] = cliente;
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

}

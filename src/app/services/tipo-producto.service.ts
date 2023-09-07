import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  constructor(private http: HttpClient) { }

  async getTiposProductos() {
    try {    
      let url = `http://localhost:8000/api/tipo_productos/by-user/{usuario_id}`;
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      url = url.replace(`{usuario_id}`, usuario.id);
      const response = await lastValueFrom(this.http.get(url));
      console.log(`[TipoProductoService.getTiposProductos:  ]`, {response});
      return response;
    } catch (error) {
      console.error(`[TipoProductoService.getTiposProductos: ERROR ]`, {error});
      throw error;
    }
  }

}

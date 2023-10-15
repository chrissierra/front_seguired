import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  async getProductos() {
    try {    
      let url = `http://localhost:8000/api/productos/by-user/{usuario_id}`;
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      url = url.replace(`{usuario_id}`, usuario.id);
      const response = await lastValueFrom(this.http.get(url));
      console.log(`[ProductoService.getProductos:  ]`, {response});
      return response;
    } catch (error) {
      console.error(`[ProductoService.getProductos: ERROR ]`, {error});
      throw error;
    }
  }


  async insertarProducto(productoEnCrudo: any) {
    try {
      let url = `http://localhost:8000/api/productos/`;
      const usuario = JSON.parse(localStorage.getItem('usuario')!);

      const producto =  {
        nombre: productoEnCrudo.nombre,
        imagen: productoEnCrudo.imagen,
        precio: productoEnCrudo.precio,
        tipo_producto_id: productoEnCrudo.mapa_tipo_objetos[productoEnCrudo.tipo_producto],
        usuario_id: usuario.id
      }
      const response = await lastValueFrom(this.http.post(url, producto));
      console.log(`[ProductoService.insertarProducto:  ]`, {response});
      return response;
    } catch (error) {
      console.error(`[ProductoService.getProductos: ERROR ]`, {error});
      throw error;
    }
  }


}

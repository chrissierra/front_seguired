import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  /* 
  {
    "venta": {
      "cliente_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "usuario_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "total": 0
    },
    "lista_productos": [
      "string"
    ],
    "lista_cantidades": [
      {
        "producto_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "cantidad": 0,
        "subtotal": 0
      }
    ],
    "entrega": {
      "fecha": "string"
    }
  }
  
  */
  async ingresarVenta(venta: any) {
    try {
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      const url = `http://localhost:8000/api/ventas`;
      const lista_productos = venta.productosSeleccionados.map((v: any)=> v.id);
      const cliente_id = venta.cliente.id;
      const lista_cantidades = venta.carritoVenta.productosCarrito.map((v:any)=> ({producto_id: v.id, cantidad: v.cantidad, subtotal: v.subtotal}));
      const total = venta.carritoVenta.total;
      const body = {
        venta: {cliente_id, usuario_id: usuario.id, total},
        lista_productos,
        lista_cantidades,
        entrega: {fecha: venta.venta.fecha }
      }
      const response = await lastValueFrom(this.http.post(url, body));
      console.log({response});
    } catch (error) {
      throw error;
    }
  }

  async getVentas() {
    try {    
      let url = `http://localhost:8000/api/ventas/by-id-usuario/{usuario_id}`;
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      url = url.replace(`{usuario_id}`, usuario.id);
      const response = await lastValueFrom(this.http.get(url));
      console.log(`[VentaService.getVentas:  ]`, {response});
      return response;
    } catch (error) {
      console.error(`[ProductoService.getProductos: ERROR ]`, {error});
      throw error;
    }
  }
}

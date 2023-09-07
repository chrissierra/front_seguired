import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-venta',
  templateUrl: './finalizar-venta.component.html',
  styleUrls: ['./finalizar-venta.component.scss']
})
export class FinalizarVentaComponent implements OnInit{
  @Input() productos: any;
  @Input() venta: any;
  @Input() cliente: any;
  @Input() carritoVenta: any;
  constructor() {}
  
  ngOnInit(): void {
    try {
      console.log(`[FinalizarVentaComponent onInit: ]`, {
        productos: this.productos,
        venta:this.venta,
        carritoVenta: this.carritoVenta,
        cliente: this.cliente
      });
    } catch (error) {
      console.error(`[FinalizarVentaComponent onInit: ]`, {error});
    }
  }



}

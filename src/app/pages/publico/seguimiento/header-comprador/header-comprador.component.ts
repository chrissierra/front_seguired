import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-comprador',
  templateUrl: './header-comprador.component.html',
  styleUrls: ['./header-comprador.component.scss']
})
export class HeaderCompradorComponent implements OnInit{
  @Input() venta: any;
  comprador: any;
  constructor() {}  
  ngOnInit(): void {
    try {
      this.comprador = this.venta.cliente;
    } catch (error) {
      console.error(`[oninit error]`, {error});
    }
  }
}

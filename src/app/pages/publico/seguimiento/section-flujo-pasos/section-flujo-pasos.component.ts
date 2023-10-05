import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-section-flujo-pasos',
  templateUrl: './section-flujo-pasos.component.html',
  styleUrls: ['./section-flujo-pasos.component.scss']
})
export class SectionFlujoPasosComponent implements OnInit{
  @Input() venta: any;
  pasos: any;
  productos: any = {}
  mostrarProductos: boolean = false;
  constructor(private utils: UtilsService) {}
  ngOnInit(): void {
    try {
      this.pasos = this.utils.ordenarPorOrdinalidad(this.venta.entregas[0].pasos);
      this.setHashProductos();

      console.log(`[ oninit.SectionFlujoPasosComponent ]`, {pasos: this.pasos, productos: this.productos})
      this.mostrarProductos = true;
    } catch (error) {
      console.error(`[ERROR: oninit.SectionFlujoPasosComponent ]`, {error})
    }
  }

  setHashProductos() {
    this.venta.productos.forEach( (valor: any) => {
      console.log(`[Inside Foreach]`, valor)
      this.productos[valor.id] = valor;
    })
  }

}

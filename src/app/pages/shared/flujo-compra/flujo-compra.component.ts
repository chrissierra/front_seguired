import { Component, Input, OnInit } from '@angular/core';
import { PasoService } from 'src/app/services/paso.service';

@Component({
  selector: 'app-flujo-compra',
  templateUrl: './flujo-compra.component.html',
  styleUrls: ['./flujo-compra.component.scss']
})
export class FlujoCompraComponent implements OnInit {
  @Input() pasos: any;
  mostrarFlujo: boolean = false;
  constructor(private pasosService: PasoService){}
  
  async ngOnInit(): Promise<void> {
    try {
      this.pasos['mapaPasosEstandar'] = await this.pasosService.setPasosEstandarHashById();
      console.log(`[ngOnInit: PASOS ]`, {pasos: this.pasos });
      this.mostrarFlujo = true;
    } catch (error) {
      console.error(`[FlujoCompraComponent ERROR OnInit ]`,{error});
    }
  }

}

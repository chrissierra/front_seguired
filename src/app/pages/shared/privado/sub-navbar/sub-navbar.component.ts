import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SUB_MENU } from 'src/app/pages/privado/ventas/unitaria/unitaria.constant';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss']
})
export class SubNavbarComponent {
 @Input() items: any; 
 @Output() cambiarPestania = new EventEmitter<any>();
 constructor(private utils: UtilsService) {}
 
 onCambiarPestania(item: SUB_MENU, indice: number){
  try {
    this.utils.todasFalsasExcepto(this.items, 'active', indice);
    this.cambiarPestania.emit(item);
  } catch (error) {
    console.error(`[onCambiarPestania]`, {error})
  }
 }
}


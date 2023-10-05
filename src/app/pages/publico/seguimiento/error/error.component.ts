import { Component, Input } from '@angular/core';
import { iERROR } from '../seguimiento.errores';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
 @Input() error!: iERROR; 
}

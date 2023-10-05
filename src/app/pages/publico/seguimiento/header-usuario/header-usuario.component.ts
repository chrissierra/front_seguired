import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.scss']
})
export class HeaderUsuarioComponent implements OnInit {
 @Input() venta: any;
 usuario: any;
 constructor(){}
  ngOnInit(): void {
    try {
      this.usuario = this.venta?.usuario;
      console.log(`[Getting usuario]`, {usuario: this.usuario, venta: this.venta});
    } catch (error) {
      console.error(``, {error})
       
    }
  }

}

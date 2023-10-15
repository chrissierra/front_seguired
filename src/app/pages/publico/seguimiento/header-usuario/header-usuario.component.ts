import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.scss']
})
export class HeaderUsuarioComponent implements OnInit {
  @Input() venta: any;
  usuario: any;
  constructor(private userService: UsuarioService){}

  get logo() {
    return  `${environment.apiUrl}/${this.userService.Logo}`
  }

  

  ngOnInit(): void {
    try {
      this.usuario = this.venta?.usuario;
      console.log(`[Getting usuario]`, {usuario: this.usuario, venta: this.venta});
    } catch (error) {
      console.error(``, {error})
        
    }
  }

}

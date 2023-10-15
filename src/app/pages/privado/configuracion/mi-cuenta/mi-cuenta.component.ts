import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.scss']
})
export class MiCuentaComponent implements OnInit {
  @Input() misDatos: any;
  usuario: any = {};
  
  constructor(private userService: UsuarioService) {}

  get logo() {
    return  `${environment.apiUrl}/${this.userService.Logo}`
  }
  
  ngOnInit(): void {
  }

  async onSubmitImagen(resp: any) {
    try {
      const {fileLocation} = resp;
      const response = await this.userService.updateUsuario(fileLocation);
      localStorage.setItem('usuario', JSON.stringify(response));
      console.log(`onSubmitImagen`, {response})
    } catch (error) {
      console.error(error)
    }
  }
  
}

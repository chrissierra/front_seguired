import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-ingresar-cliente',
  templateUrl: './ingresar-cliente.component.html',
  styleUrls: ['./ingresar-cliente.component.scss']
})
export class IngresarClienteComponent implements OnInit {
  cliente: any = {}

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {

  }

  async ingresar() {
    try {
      const response = await this.clienteService.insertarCliente(this.cliente);
      console.log(` ingresar`, {cliente: this.cliente , response });
    } catch (error) {
      
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit{

  clientes: any;

  constructor(private clientesService: ClientesService) {}
  async ngOnInit(): Promise<void> {
    try {
      this.clientes = await this.clientesService.getClientes();
      console.log(`[ListarClientesComponent]`, {clientes: this.clientes});
    } catch (error) {
      
    }
  }

  visualizar(cliente: any) {
    console.log(`ListarClientesComponent visualizar`, {cliente})
  }

  volver() {

  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router){}

  navegar(ruta: string) {
    try {
      this.router.navigate([`/${ruta}`]);
    } catch (error) {
      console.error(`[navegar Error ]`, {error});
    }
  }

}

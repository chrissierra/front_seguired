import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: any;
  public password: any;
  constructor(private loginService: LoginService, private router: Router){}


  submit() {
    console.log(`submit`, {})
    try {      
      this.loginService.getUsuario(this.email);
      this.router.navigate(['/Dashboard']);
    } catch (error) {
      console.error(`[submit]`, {error})
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async getUsuario(correo: string) {
    try {    
      let url = `http://localhost:8000/api/usuario?email={correo}`;
      url = url.replace('{correo}', correo)
      const response = await lastValueFrom(this.http.get(url));
      localStorage.setItem('usuario', JSON.stringify(response));
      return response;
    } catch (error) {
      console.error(`[submit]`, {error})
      throw error;
    }
  }

}

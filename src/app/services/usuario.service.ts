import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ImagenesService } from './imagenes.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private imagenesService: ImagenesService) { }
  get Logo() {
    const {logo} = JSON.parse(localStorage.getItem('usuario')!);
    return logo;
  }
  async uploadLogo(formData: any) {
    try {
      return this.imagenesService.uploadImage(formData);
    } catch (error) {
      console.error(`[UsuarioService.uploadLogo: ERROR ]`, {error});
      throw error;
    }
  }

  async updateUsuario(pathLogo: any) {
    try {
      let url = `http://localhost:8000/api/usuario/{usuario_id}`;
      const user = JSON.parse(localStorage.getItem('usuario')!);
      user.logo = pathLogo;
      url = url.replace(`{usuario_id}`, user.id);
      console.log(`updateUsuario`, {user})
      return await lastValueFrom(this.http.put(url, user));
    } catch (error) {
      console.error(`[update usuario]`, {error});
      throw error;
    }
  }


}

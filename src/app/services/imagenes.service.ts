import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient) { }

  async uploadImage(formData: any) {
    try {
      let url = `http://localhost:8000/upload`;
      const usuario = JSON.parse(localStorage.getItem('usuario')!);
      formData.append('usuario',  usuario.id );
      return await lastValueFrom(this.http.post(url, formData));
    } catch (error) {
      console.error(`[ImagenesService.uploadLogo: ERROR ]`, {error});
      throw error;
    }
  }

  
}

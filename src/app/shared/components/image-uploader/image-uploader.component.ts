import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  
  formularioSubidaImagenes: FormGroup;
  @Input() isSubmitUsado: boolean = false;
  @Input() labelSubida: string = 'Imagen'
  @Output() onSubmitImagen = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private imageService: ImagenesService) {
    this.formularioSubidaImagenes = this.fb.group({
      file: ['', Validators.required]
    });
  } 
  
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.formularioSubidaImagenes.get('file')!.setValue(file);
    this.enviarSiNoSeSubmit()
  }

  enviarSiNoSeSubmit() {
    if(!this.isSubmitUsado) {
      this.onSubmit()
    }
  }

  async onSubmit() {
    if (this.formularioSubidaImagenes.valid) {
      const formData = new FormData();
      formData.append('file', this.formularioSubidaImagenes.get('file')!.value);
      const response = await this.imageService.uploadImage(formData);      
      this.onSubmitImagen.emit(response);
    }
  }
}

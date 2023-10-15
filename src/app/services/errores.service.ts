import { Injectable } from '@angular/core';
import { ACCIONES_ERRORES, ERROR_TIPO } from '../shared/errores.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErroresService {

  constructor(private router: Router) { }

  ejecutarAcciones(accion: string) {
    switch (accion) {
      case ACCIONES_ERRORES.REDIRIGIR_LOGIN:
        this.router.navigate([`/`]);
        break;
    
      default:
        break;
    }
  }

  catchingError(e: any){
    try {
      const error: ERROR_TIPO = e;
      this.loggerErrors(error);
      this.ejecutarAcciones(error.accion);
    } catch (error) {
      throw e;
    }
  }

  loggerErrors(error: ERROR_TIPO) {
    try {
      console.error(`%c[Error]%c Logger errors: ${error.mensaje}`, 'color: purple;', 'color: blue;', error, error.verbose);
    } catch (error) {
      console.error(error)
    }
  }

  setError(error: ERROR_TIPO ,eVerbose: any) {
    throw {
      ...error,
      verbose: eVerbose
    }
  }

}

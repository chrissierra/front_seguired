import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  todasFalsasExcepto(obj: any, exceptionKey: string) {
    return Object.keys(obj).reduce((acc: any, key) => {
      acc[key] = key === exceptionKey;
      return acc;
    }, {});
  }

  eliminarDuplicados(arr: any) {
    const mapaDeIDs: any = {};
    const resultado: any = [];
  
    for (const item of arr) {
      if (!mapaDeIDs[item.id]) {
        mapaDeIDs[item.id] = true;
        resultado.push(item);
      }
    }
  
    return resultado;
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  private _todasFalsasExcepto(obj: any, exceptionKey: string) {
    return Object.keys(obj).reduce((acc: any, key) => {
      acc[key] = key === exceptionKey;
      return acc;
    }, {});
  }

  public todasFalsasExcepto(obj: any, exceptionKey: string, indiceElemento: number = 0 ) {

    if(obj instanceof Array){
      return obj.map( (data, index) => {
        data[exceptionKey] = false;
        if(index === indiceElemento) data[exceptionKey] = true;
        return data;
      });
    }

    return this._todasFalsasExcepto(obj, exceptionKey);


  }

  public eliminarDuplicados(arr: any) {
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

  ordenarPorOrdinalidad(arrayObjetos: any[]) {
    return arrayObjetos.sort((a, b) => {
      const numA = parseInt(a.ordinalidad, 10);
      const numB = parseInt(b.ordinalidad, 10);
      
      return numA - numB;
    });
  }


}

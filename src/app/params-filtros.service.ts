import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsFiltrosService {
  private fab:string = "0"
  private tec:string = "0"
  private nombre:string = ""
  private precioMin:string = "0"
  private precioMax:string = "999999"


  constructor() { }

  getFabFilter() {
    return this.fab
  }
  setFabFilter(newFab:string) {
    this.fab = newFab
  }

  getTecFilter() {
    return this.tec
  }
  setTecFilter(newTec:string) {
    this.tec = newTec
  }

  getNombreFilter() {
    return this.nombre
  }
  setNombreFilter(newNombre:string) {
    this.nombre = newNombre
  }

  getPrecioMinFilter() {
    return this.precioMin
  }
  setPrecioMinFilter(newPrecioMin:string) {
    this.precioMin = newPrecioMin
  }

  getPrecioMaxFilter() {
    return this.precioMax
  }
  setPrecioMaxFilter(newPrecioMax:string) {
    this.precioMax = newPrecioMax
  }



}

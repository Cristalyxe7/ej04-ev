import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  private coches:Array<string> = []

  constructor() {
    let savedFavs = localStorage.getItem('favsCars') || "[]"
    this.coches = JSON.parse(savedFavs)
   }



  addFav(id:string) {
    if (!this.coches.includes(id)) {
      this.coches.push(id)
      localStorage.setItem('favsCars', JSON.stringify(this.coches))
    }
  }
  delFav(id:string) {
    let posicion=this.coches.indexOf(id)
    if (posicion>=0 || posicion<this.coches.length) {
    this.coches.splice(posicion,1)
    localStorage.setItem('favsCars', JSON.stringify(this.coches))
    }
  }
  getFavs():Array<string> {
    return this.coches
  }
  isFav(id:string){
    return this.coches.includes(id)
  }
}

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

  getFavs():Array<string> {
    return this.coches
  }
}

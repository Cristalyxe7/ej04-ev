import { Component } from '@angular/core';
import { FavsService } from 'src/app/favs.service';
import { BdEvService } from 'src/app/bd-ev.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  constructor(private favs:FavsService , private BdEvService:BdEvService) {

  }



  getFavs() {
    return this.favs.getFavs()
  }

  getCocheById(id:string){
    return this.BdEvService.getCocheById(id)
  }
}

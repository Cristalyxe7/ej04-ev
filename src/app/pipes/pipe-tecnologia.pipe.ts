import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe-tecnologia'
})
export class PipeTecnologiaPipe implements PipeTransform {

  transform(tecnologias: any[], tec: string): any[] {
    if (tecnologias && tecnologias.length && tec != "0" ) {
      return tecnologias.filter( (c:any) => c.tecnologia == tec )
    } else
      return tecnologias;
  }

}

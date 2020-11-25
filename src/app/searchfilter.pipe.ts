import {Pipe, PipeTransform} from '@angular/core';
import {Livre} from './model/Livre';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Livres: Livre[], searchValue: string): Livre[] {
  if (!Livres || !searchValue)
  {
    return  Livres;
  }
  return Livres.filter(Livre => Livre.NomAuteur.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    Livre.TitreLivre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}

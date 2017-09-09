import { PlayerInfoModel } from './../../models/playerInfoModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByJerseyNumber'
})
export class SortByJerseyNumberPipe implements PipeTransform {

  transform(array: PlayerInfoModel[]) {
    if(array !== undefined){
    
      array.sort((a, b) => {
        return a.jerseyNumber - b.jerseyNumber;
      });
    }

    return array;
  }

}
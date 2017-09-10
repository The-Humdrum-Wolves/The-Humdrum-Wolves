import { Pipe, PipeTransform } from '@angular/core';

import { PlayerInfoModel } from './../../models/playersModels/playerInfoModel';

@Pipe({
  name: 'sortByJerseyNumber'
})
export class SortByJerseyNumberPipe implements PipeTransform {

  transform(array: PlayerInfoModel[]): PlayerInfoModel[] {
    if(array !== undefined){
      array.sort((a, b) => {
        return a.jerseyNumber - b.jerseyNumber;
      });
    }

    return array;
  }

}
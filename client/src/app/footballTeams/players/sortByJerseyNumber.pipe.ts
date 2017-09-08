import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByJerseyNumber'
})
export class SortByJerseyNumberPipe implements PipeTransform {

  transform(array: Array<any>): Array<any> {

    array.sort((a, b) => {
      return a['jerseyNumber'] - b['jerseyNumber'];
    })

    return array;
  }

}
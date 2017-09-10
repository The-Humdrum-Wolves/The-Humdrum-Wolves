import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatFixtureDate'
})
export class FormatFixtureDatePipe implements PipeTransform {

  formatedDate: string;
  transform(fixtureDate: string) {
    
    this.formatedDate = moment(this.formatedDate).format('LLLL');
    
    return this.formatedDate;
  }

}
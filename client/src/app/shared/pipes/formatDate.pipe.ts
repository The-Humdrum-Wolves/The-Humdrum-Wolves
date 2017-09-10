import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFixtureDate'
})
export class FormatDatePipe implements PipeTransform {

  formatedDate: string;
  transform(fixtureDate: string): string {

    this.formatedDate = new Date(fixtureDate).toLocaleString();

    return this.formatedDate;
  }

}
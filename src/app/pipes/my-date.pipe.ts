import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

// this pipe is to substact number of dates
@Pipe({
  name: 'substactedDate',
})
export class MyDatePipe implements PipeTransform {
  transform(
    date: Date | string,
    day: number,
    format: string = 'yyyy-MM-dd'
  ): string | null {
    date = new Date(date); // if orginal type was a string
    date.setDate(date.getDate() - day);
    return new DatePipe('en-US').transform(date, format);
  }
}

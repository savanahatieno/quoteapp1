import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePip'
})
export class DatePipPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

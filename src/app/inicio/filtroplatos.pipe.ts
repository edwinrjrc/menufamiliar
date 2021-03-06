import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroplatos'
})
export class FiltroplatosPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter(val => val.nombrePlato.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } else {
      return value;
    }
  }

}

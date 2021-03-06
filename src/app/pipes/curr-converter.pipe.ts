import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currConverter'
})
export class CurrConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === '$') {
        let curr = value * 418;
        return curr.toFixed(2);
      } else if (unit === 'T'){
        var curr = value / 418;
        return curr.toFixed(2);
      }
    }
    return;

  }
}

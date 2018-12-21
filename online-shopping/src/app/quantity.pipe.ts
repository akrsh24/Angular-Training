import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stocks'
})
export class QuantityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + " " + args[0];
  }

}

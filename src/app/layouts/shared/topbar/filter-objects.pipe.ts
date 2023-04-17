import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterObjects'
})
export class FilterObjectsPipe implements PipeTransform {

  transform(arr: any[], key: string, filterValue: any): any[] {
    return arr.filter(e => e[key] === filterValue);
  }

}

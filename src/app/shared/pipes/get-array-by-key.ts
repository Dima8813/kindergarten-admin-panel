import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getArrayByKey',
  standalone: true,
})
export class GetArrayByKey implements PipeTransform {
  transform(array: any[], payload: string): string[] {
    return array.map(item => item[payload]);
  }
}

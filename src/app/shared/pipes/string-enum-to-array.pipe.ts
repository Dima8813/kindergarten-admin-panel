import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringEnumToArray',
  standalone: true,
})
export class StringEnumToArray implements PipeTransform {
  transform(object: Object): Array<{ key: string; value: string }> {
    const keys = Object.keys(object);
    return keys.map(key => ({ key, value: Object(object)[key] }));
  }
}

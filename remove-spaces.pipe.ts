import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let spaceStr = value.replace('-', ' ');
    return spaceStr;
  }

}

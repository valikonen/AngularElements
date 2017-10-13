import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

 // tgrg.subscribe(data => console.log('form changes', data));

  transform(value: any, args?: any): any {
    return null;
  }

}

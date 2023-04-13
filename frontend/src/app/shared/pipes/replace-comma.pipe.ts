import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'replaceComma'
})

export class ReplaceComma implements PipeTransform{
  transform(value: string, ...args: any[]): string {
      if (!!value) {
        return value.replace(/,/g, '.');
      }else{
        return '';
      }
  }
}

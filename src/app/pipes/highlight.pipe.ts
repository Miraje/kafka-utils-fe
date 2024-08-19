import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, args: string): string {
    const regExp = new RegExp(args, 'igm');
    return value.replace(regExp, '<span class="highlighted-text">$&</span>');
  }
}

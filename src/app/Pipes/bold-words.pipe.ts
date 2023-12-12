import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'boldWords'
})
export class BoldWordsPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, wordsToBold: string[]): SafeHtml {
    let result = value;
    // if value is undefined or null, return empty string
    if (!value) {
      return '';
    }
    for (const word of wordsToBold) {
      const regex = new RegExp(`(${word})`, 'g');
      result = result.replace(regex, '<b>$1</b>');
    }
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

}
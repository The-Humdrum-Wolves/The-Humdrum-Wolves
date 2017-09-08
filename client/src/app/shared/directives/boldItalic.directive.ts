import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoldItalic]'
})
export class BoldItalicDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-weight', 'bold');
    renderer.setStyle(el.nativeElement, 'font-style', 'italic');
  }

}
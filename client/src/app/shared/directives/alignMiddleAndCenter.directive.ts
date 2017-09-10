import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlignMiddleAndCenter]'
})
export class AlignMiddleAndCenterDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'text-align', 'center');
    renderer.setStyle(el.nativeElement, 'vertical-align', 'middle');
  }

}
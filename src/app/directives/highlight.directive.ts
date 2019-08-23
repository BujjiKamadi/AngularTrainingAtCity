import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highLightColor1: string;
  @Input() highLightColor: string;
  @Input() defaultColor: string;
  constructor(private el: ElementRef) {
    console.log(el);
    // el.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseenter') onmouseenter() {
    this.highLight(this.highLightColor1 || this.defaultColor || 'green');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highLight(null);
  }
  @HostListener('click') onclick() {
    this.highLight('beige');
  }
  // @HostListener('click', ['hello']) onclick(msg: string[]) {
  //   console.log(msg);
  //   this.highLight('beige');
  // }
  highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

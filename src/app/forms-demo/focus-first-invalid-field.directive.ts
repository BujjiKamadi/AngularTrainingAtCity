import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusFirstInvalidField]'
})
export class FocusFirstInvalidFieldDirective {

  constructor(private el: ElementRef) {
  }
  @HostListener('submit', ['$event'])
  onReactiveFormSubmit() {
    console.log(this.el);
    const invalidElements = this.el.nativeElement.querySelectorAll('.ng-invalid');
    console.log(invalidElements);
    if (invalidElements.length > 0) {
      console.log(invalidElements[1]);
      console.log(invalidElements[1].getElementsByTagName('input')[0]);
      invalidElements[1].getElementsByTagName('input')[0].focus();
      // invalidElements[0].focus();
      console.log(invalidElements[1].attributes);
      console.log();
    }
  }
}

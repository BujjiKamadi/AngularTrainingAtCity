import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appMismatchValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MismatchValidatorDirective, multi: true }]
})
export class MismatchValidatorDirective {
  @Input() appMismatchValidator: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.root.get(this.appMismatchValidator);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { misMatch : true};
    }
    return null;
  }
  constructor() { }

}

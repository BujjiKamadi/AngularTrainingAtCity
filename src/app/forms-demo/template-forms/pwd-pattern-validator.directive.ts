import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPwdPatternValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PwdPatternValidatorDirective,
    multi: true
  }]
})
export class PwdPatternValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const pwdRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    const validationStatus = pwdRegExp.test(control.value);
    return !validationStatus ? { pwdPatternFailed: true} : null;
  }
  constructor() { }

}

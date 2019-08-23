import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormGroup, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPwdMismatchValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PwdMismatchValidatorDirective,
    multi: true
  }]
})
export class PwdMismatchValidatorDirective implements Validator {
  @Input() appPwdMismatchValidator: string[] = [];
  validate(control: AbstractControl): ValidationErrors {
    // console.log(this.appPwdMismatchValidator[0]);
    // console.log(this.appPwdMismatchValidator[1]);
    const control1 = control.get([this.appPwdMismatchValidator[0]]);
    const matchingControl = control.get([this.appPwdMismatchValidator[1]]);
    // console.log(control1);
    // console.log(matchingControl);
    if (!control1 || !matchingControl) {
      return null;
    }
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }
    if (control1.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
      // return { mustMatch: true };
    } else {
      matchingControl.setErrors(null);
    }
  }
  // validate(control: AbstractControl): { [key: string]: any } | null {
  //   console.log(control);
  //   if (control.get('pwd') != undefined && control.get('cnfrmPwd') != undefined) {
  //     console.log('in if case')
  //     const pwdCntrl = control.get('pwd').value;
  //     const cpwdcntrl1 = control.get('cnfrmPwd').value;
  //     if(pwdCntrl !== '' && cpwdcntrl1 !== '' && pwdCntrl === cpwdcntrl1){
  //       console.log('if case');
  //       return   { PwdMisMatchFound: true } ;
  //     }else{
  //       console.log('else case');
  //       return null;
  //     }

  //   }
  // }
  constructor() { }

}

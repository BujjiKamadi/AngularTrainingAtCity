import { ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


export function pwdPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const pwdRegExp = /^(?=.*\d)(?=.*[a-z: any])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        const password = control.value;
        const pwdValidation = pwdRegExp.test(password);
        // console.log(password);
        // console.log(pwdValidation);
        return !pwdValidation ? { passwordPatternFailed: true } : null;
    };
}
export const samePwdValidator1: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const pwdVal = control.get('password').value;
    const cnfrmpwdVal = control.get('cnfrmPwd').value;
    return pwdVal !== '' && cnfrmpwdVal !== '' && pwdVal !== cnfrmpwdVal ? { pwdCnfrmAreDiff: true } : null;
};
export function samePwdValidator(control: FormGroup) {
    const pwdVal = control.get('password').value;
    const cnfrmpwdVal = control.get('cnfrmPwd').value;
    const regExp = /[0-9]/;
    const regExp1 = /^[A-Z]/;
    if (control.get('password').touched && control.get('password').dirty) {
        console.log('if case');
        return !regExp1.test(pwdVal) ? { shouldStartWithUpperAlpha: true} : null;
    } else if (!regExp.test(pwdVal)) {
        return !regExp.test(pwdVal) ? { startwithNumber: true} : null;
    } else {
        return pwdVal !== '' && cnfrmpwdVal !== '' && pwdVal !== cnfrmpwdVal ? { pwdCnfrmAreDiff: true } : null;
    }
}
export function requiredValidator(control: AbstractControl) {
    if (control.value === '') {
        return { customRequiredValidation: true };
    }
    return null;
}

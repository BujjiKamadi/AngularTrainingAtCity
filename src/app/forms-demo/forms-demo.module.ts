import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { PwdPatternValidatorDirective } from './template-forms/pwd-pattern-validator.directive';
import { PwdMismatchValidatorDirective } from './template-forms/pwd-mismatch-validator.directive';
import { MismatchValidatorDirective } from './template-forms/mismatch-validator.directive';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { FormArraysComponent } from './form-arrays/form-arrays.component';
import { ReactiveFormsCanDeactivateGuardService} from './reactive-forms/reactive-forms-can-deactivate-guard.service';
import { FocusFirstInvalidFieldDirective } from './focus-first-invalid-field.directive';

import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { FormArraysPrimeNgComponent } from './form-arrays-prime-ng/form-arrays-prime-ng.component';
import { ReferenceFormatComponent } from './reference-format/reference-format.component';

@NgModule({
  declarations: [
    ReactiveFormsComponent,
    ComponentCommunicationComponent,
    TemplateFormsComponent,
    PwdPatternValidatorDirective,
    PwdMismatchValidatorDirective,
    MismatchValidatorDirective,
    RegistrationDetailsComponent,
    FormArraysComponent,
    FocusFirstInvalidFieldDirective,
    FormArraysPrimeNgComponent,
    ReferenceFormatComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    FormsDemoRoutingModule
  ],
  exports: [
    ReactiveFormsComponent,
    FormArraysComponent
  ],
  providers: [ReactiveFormsCanDeactivateGuardService]
})
export class FormsDemoModule { }

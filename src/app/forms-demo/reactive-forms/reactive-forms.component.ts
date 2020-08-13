import { Component, OnInit, ViewChild, OnDestroy, Output, EventEmitter, OnChanges, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl, NgForm } from '@angular/forms';
import { pwdPatternValidator, samePwdValidator, samePwdValidator1, requiredValidator } from './Validations';
import { ComponentCommunicationComponent } from '../component-communication/component-communication.component';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit, OnDestroy {
  @ViewChild(ComponentCommunicationComponent, { static: true }) ComponentCommun: ComponentCommunicationComponent;
  registrationForm: FormGroup;
  filteredStates: any[];
  statesList: any[];
  countriesList: any[];
  coursesList: any[];
  languagesList: any[];
  addressCheckedVal = false;
  displayJsonBool = false;
  formRecords: any[] = [];
  tableColumns: any[];
  cars: any[];
  brands: any[];
  constructor(private fb: FormBuilder, private formData: FormDataService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.cars = [
      { vin: 'dsad231ff', year: '2012', brand: 'Audi', color: 'Black' },
      { vin: 'gwregre345', year: '2011', brand: 'Renault', color: 'Gray' },
      { vin: 'h354htr', year: '2005', brand: 'BMW', color: 'Blue' },
      { vin: 'j6w54qgh', year: '2003', brand: 'Mercedes', color: 'Orange' },
      { vin: 'hrtwy34', year: '1995', brand: 'Volvo', color: 'Black' },
      { vin: 'jejtyj', year: '2005', brand: 'Honda', color: 'Yellow' },
      { vin: 'g43gr', year: '2012', brand: 'Jaguar', color: 'Orange' },
      { vin: 'greg34', year: '2013', brand: 'VM', color: 'Orange' },
      { vin: 'h54hw5', year: '2000', brand: 'Ford', color: 'Black' },
      { vin: '245t2s', year: '2013', brand: 'Fiat', color: 'Red' },
    ];
    this.brands = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
    this.statesList = this.ComponentCommun.getStatesList();
    this.countriesList = this.ComponentCommun.getCountriesList();
    this.coursesList = this.ComponentCommun.getCoursesList();
    this.languagesList = this.ComponentCommun.getLanguagesList();
    this.registrationForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      gender: [''],
      state: ['', Validators.required],
      branch: [''],
      password: ['', [pwdPatternValidator()]],
      cnfrmPwd: [''],
      pinCode: [''],
      courses: [''],
      country: [''],
      hobbies: [''],
      email: ['', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com')],
      adhaarNumber: [''],
      languages: [''],
      additionalInfo: [''],
      sameAddressDecide: [''],
      address: this.fb.group({
        permanentDrNo: [''],
        permanentStreetName: [''],
        presentDrNo: [''],
        presentStreetName: ['']
      })
    }, { validators: samePwdValidator1 });
    console.log(this.registrationForm);
    console.log(Object.keys(this.registrationForm.controls));
    // for(str of Object.keys(this.registrationForm.controls)){

    // }
    this.tableColumns = [
      { header: 'First Name', field: 'firstName' },
      { header: 'Last Name', field: 'lastName' },
      { header: 'dateOfBirth', field: 'dateOfBirth' },
      { header: 'gender', field: 'gender' },
      { header: 'branch', field: 'branch' },
      { header: 'password', field: 'password' },
      { header: 'cnfrmPwd', field: 'cnfrmPwd' },
      { header: 'pinCode', field: 'pinCode' },
      { header: 'hobbies', field: 'hobbies' },
      { header: 'email', field: 'email' },
      { header: 'adhaarNumber', field: 'adhaarNumber' },
      { header: 'languages', field: 'languages' },
      { header: 'additionalInfo', field: 'additionalInfo' },
      { header: 'sameAddressDecide', field: 'sameAddressDecide' }
      // { header: 'state', field: 'state'},
      // { header: 'permanentDrNo', field: 'permanentDrNo'},
      // { header: 'permanentStreetName', field: 'permanentStreetName'},
      // { header: 'presentDrNo', field: 'presentDrNo'},
      // { header: 'presentStreetName', field: 'presentStreetName'},
      // { header: 'courses', field: 'courses'},
      // { header: 'country', field: 'country'},
    ];
  }
  ngOnDestroy() {
    this.formData.registrationFormData = this.registrationForm;
  }
  filterStatesOnComplete(event) {
    this.filteredStates = this.filterStates(event.query, this.statesList);
  }
  filterStates(query, states: any[]): any[] {
    const filtered: any[] = [];
    for (const state of states) {
      if (state.stateName.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(state);
      }
    }
    return filtered;
  }
  displayJson(): void {
    console.log(this.registrationForm);
    this.displayJsonBool = !this.displayJsonBool;
    this.ComponentCommun.displayedJsonDataInChild(this.displayJsonBool);
  }
  resetFormData(): void {
    this.registrationForm.reset();
  }
  addFormDataToTable(): void {
    this.formRecords.push(this.registrationForm.value);
    console.log(this.formRecords);
  }
  onFormSubmit() {
    console.log('onFormSubmit method');
    console.log(this.registrationForm);
    console.log(this.registrationForm.controls.lastName);
    this.registrationForm.controls.lastName.setValidators([Validators.required]);
    this.registrationForm.controls.lastName.updateValueAndValidity({ onlySelf: true });
    console.log(this.registrationForm.controls.lastName);
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      console.log('no errors');
    } else {

    }
    Object.keys(this.registrationForm.controls).forEach(key => {
      if (this.registrationForm.get(key).invalid) {
        this.registrationForm.get(key).markAsTouched();
        this.registrationForm.get(key).markAsDirty();
      }
    });
  }
  ChangeBgColor(): void {
    console.log(this.elementRef);
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'beige';
    this.elementRef.nativeElement.lastChild.firstChild.style.backgroundColor = 'beige';
  }
  validateFirstName(event) {
    console.log(event);
    console.log(this.registrationForm.controls.firstName.value);
    const regExp = /[0-9]/;
    if (this.registrationForm.controls.firstName.value.length > 9 && (event.key !== 'Delete'  || event.key !== 'Delete')) {
      this.registrationForm.controls.firstName.setErrors({maxLengthExceeded: true});
      return false;
    }
    return true;
  }
}

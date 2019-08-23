import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }
  registrationFormData: FormGroup;
  displayRegisteredData: FormGroup;
}

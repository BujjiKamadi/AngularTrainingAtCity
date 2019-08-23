import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-arrays-prime-ng',
  templateUrl: './form-arrays-prime-ng.component.html',
  styleUrls: ['./form-arrays-prime-ng.component.scss']
})
export class FormArraysPrimeNgComponent implements OnInit {
  Group: FormGroup;
  recordIndex: number;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.Group = this.fb.group({
      formGroupArray: this.fb.array([
        this.addGroup()
      ])
    });
  }
  get Format() { return this.Group.get('formGroupArray') as FormArray; }
  addGroup() {
    return this.fb.group({
      origin: [''],
      destination: [''],
      index: ['']
    });
  }
  addRow() {
    this.recordIndex = this.Format.length - 1;
    this.Format.push(this.addGroup());
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-arrays',
  templateUrl: './form-arrays.component.html',
  styleUrls: ['./form-arrays.component.scss']
})
export class FormArraysComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  productSuppliersForm: FormGroup;
  suppliersArray: FormArray;
  ngOnInit() {
    this.productSuppliersForm = this.fb.group({
      productID: [''],
      productName: [''],
      suppliers: this.fb.array([this.getSupplierRecord()])
    });
  }
  getSupplierRecord(): FormGroup {
    console.log('add method');
    return this.fb.group({
      supplierName: [''],
      state: [''],
      country: [''],
      phoneNo: ['']
    });
  }
  addAnotherSupplier() {
    this.suppliersArray = this.productSuppliersForm.get('suppliers') as FormArray;
    this.suppliersArray.push(this.getSupplierRecord());
  }
  submitDetaisl() {
    console.log(this.productSuppliersForm.value);
  }
}

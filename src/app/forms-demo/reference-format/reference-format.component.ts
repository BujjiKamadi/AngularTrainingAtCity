import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reference-format',
  templateUrl: './reference-format.component.html',
  styleUrls: ['./reference-format.component.scss']
})
export class ReferenceFormatComponent implements OnInit {
  referenceFormat: FormGroup;
  minMaxOptionsGroup: FormGroup;
  presentRowIndexMinMaxGroup = 0;
  display: boolean;
  countries: any;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.countries= [
      { counrtyName: 'Australia', counrtyCode: 'AU' },
      { counrtyName: 'Afghanistan', counrtyCode: 'AFG' },
      { counrtyName: 'Bangladesh', counrtyCode: 'BNG' },
      { counrtyName: 'Cambodia', counrtyCode: 'CBD' },
      { counrtyName: 'India', counrtyCode: 'IND' }
    ];
    this.referenceFormat = this.fb.group({
      referenceFormatArray: this.fb.array([
        this.addNewReferenceFormat()
      ])
      // minMaxArray: this.fb.array([
      //   this.addMinMaxValues()
      // ])
    });
    this.minMaxOptionsGroup = this.fb.group({
      minMaxOptionsArray: this.fb.array([
        this.addMinMaxValues()
      ])
    });

  }
  get referenceFormatArray1() { return this.referenceFormat.get('referenceFormatArray') as FormArray; }
  get minMaxValuesArray() { return this.minMaxOptionsGroup.get('minMaxOptionsArray') as FormArray; }
  addNewReferenceFormat(): FormGroup {
    console.log('refer add');
    return this.fb.group({
      origin: [''],
      destination: [''],
      index: ['']
    });
  }
  addMinMaxValues(): FormGroup {
    console.log('minmix add');
    return this.fb.group({
      minMaxIndex: [''],
      minValue: [''],
      maxValue: [''],
      minMaxCharacters: ['']
    });
  }
  addNewRecord() {
    this.display = false;
    this.referenceFormatArray1.push(this.addNewReferenceFormat());
    this.minMaxValuesArray.push(this.addMinMaxValues());
    // console.log(this.minMaxOptionsGroup.get('minMaxOptionsArray').controls[0]);
    console.log(document.getElementById('referOptions'));
  }
  deleteSelectedRecord(rowIndex: number) {
    this.referenceFormatArray1.controls.splice(rowIndex, 1);
    this.minMaxValuesArray.controls.splice(rowIndex, 1);
  }
  showMinMax(rowIndex: number) {
    this.display = true;
    this.presentRowIndexMinMaxGroup = rowIndex;
  }
  getSelectedMinMaxRecords(index) {
    const getFormGroupAsArray = [];
    // tslint:disable-next-line: no-string-literal
    getFormGroupAsArray.push(this.minMaxOptionsGroup.get('minMaxOptionsArray')['controls'][index]);
    return getFormGroupAsArray;
  }
}

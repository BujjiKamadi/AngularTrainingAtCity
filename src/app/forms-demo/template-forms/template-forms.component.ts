import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {
  firstName: string = null;
  dateOfBirth: Date = null;
  lastName: string = null;
  state: any[] = [];
  branchName: any[] = [];
  pwd: string;
  cnfrmPwd: string;
  pinCode: string;
  courses: any[] = [];
  country: any[] = [];
  gender: string;
  hobbies: any[] = [];
  email: string;
  adhaarNumber: string;
  languages: any[] = [];
  additionalInfo: string;
  statesList: any[] = [
    { stateID: 1, stateName: 'Andhra Pradesh' },
    { stateID: 2, stateName: 'ArunaChal Pradesh' },
    { stateID: 3, stateName: 'Telangana' },
    { stateID: 4, stateName: 'Tamil Nadu' },
    { stateID: 5, stateName: 'Kerala' },
    { stateID: 6, stateName: 'Bihar' },
  ];
  filteredStates: any[];
  coursesList: any[] = [
    { courseID: 10, courseName: 'Java' },
    { courseID: 10, courseName: 'Php' },
    { courseID: 10, courseName: 'Angular' },
    { courseID: 10, courseName: 'Sql Server' },
    { courseID: 10, courseName: 'Dot Net' },
  ];
  countriesList: any[] = [
    { counrtyName: 'Australia', counrtyCode: 'AU' },
    { counrtyName: 'Afghanistan', counrtyCode: 'AFG' },
    { counrtyName: 'Bangladesh', counrtyCode: 'BNG' },
    { counrtyName: 'Cambodia', counrtyCode: 'CBD' },
    { counrtyName: 'India', counrtyCode: 'IND' }
  ];
  languagesList: any[] = [
    { label: 'Telugu', value: 'Telugu' },
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Tamil', value: 'Tamil' },
    { label: 'Malayam', value: 'Malayam' }
  ];
  displayJsonBool = false;
  submittedFormData = '';
  formRecords: any[] = [];
  tableColumns: any[];
  growlMsgs: Message[] = [];
  constructor() { }

  ngOnInit() {
    this.tableColumns = [
      { header: 'First Name', field: 'firstName'},
      { header: 'Last Name', field: 'lastName'},
      { header: 'dateOfBirth', field: 'dateOfBirth'},
      { header: 'gender', field: 'gender'},
      { header: 'branchName', field: 'branchName'},
      { header: 'password', field: 'pwd'},
      { header: 'cnfrmPwd', field: 'cnfrmPwd'},
      { header: 'pinCode', field: 'pinCode'},
      { header: 'hobbies', field: 'hobbies'},
      { header: 'email', field: 'email'},
      { header: 'adhaarNumber', field: 'adhaarNumber'},
      { header: 'languages', field: 'languages'},
      { header: 'additionalInfo', field: 'additionalInfo'}
    ];
  }
  filterStatesOnComplete(event): void {
    const filtered: any[] = [];
    for (const state of this.statesList) {
      if (state.stateName.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        filtered.push(state);
      }
    }
    this.filteredStates = filtered;
  }
  displayJson(form): void {
    console.log(form.value);
    this.displayJsonBool = !this.displayJsonBool;
    // this.messageService.add({severity: 'success', summary: 'Submitted successfully', detail: `
    // Template form data is displayed successfully in child component`})
    this.growlMsgs.push({severity: 'success', summary: 'Submitted successfully', detail: `
     Template form data is displayed successfully in child component`});
  }
  resetFormData(formData: NgForm): void {
    formData.reset();
    console.log(formData.submitted);
    // formData.resetForm();
    // console.log(formData.submitted);
  }
  addFormDataToTable(formData: NgForm): void {
    this.formRecords.push(formData.value);
    console.log(this.formRecords);
  }
  // onRegisterClick(regFormData): void {
  //   console.log(regFormData);
  //   console.log(regFormData.value);
  //   if (regFormData.valid) {
  //     this.submittedFormData = 'FirstName is: ' + this.firstName + '<br>LastName is : ' + this.dateOfBirth;
  //   } else {
  //     this.submittedFormData = 'few fields are Invalid in the form';
  //   }
  // }
  onRegisterClick(regFormData): void {
    if (regFormData.invalid) {
      console.log(regFormData);
      for (const ngModelArray of regFormData._directives) {
        if (ngModelArray.model instanceof Object && ngModelArray.name !== 'dateOfBirth') {
          let tempModelData = '';
          Object.keys(ngModelArray.model).forEach(objKey => {
            tempModelData = tempModelData + objKey + ' : ' + ngModelArray.model[objKey] + ' , ';
          });
          this.submittedFormData = this.submittedFormData + '<br />' + ngModelArray.name + ' : ' + tempModelData;
        } else {
          this.submittedFormData = this.submittedFormData + '<br />' + ngModelArray.name + ' : ' + ngModelArray.model;
        }
      }
    } else {
      this.submittedFormData = 'Few fields are invalid in the form, please fill them correctly and try again';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent implements OnInit {

  constructor(private formdata: FormDataService) { }
  getFormData: FormGroup;
  tableRecords: any[] = [];
  ngOnInit() {
    this.getFormData = this.formdata.registrationFormData;
    this.tableRecords.push(this.getFormData.value);
  }

}

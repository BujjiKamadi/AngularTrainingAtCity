import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpMethodsService } from '../../services/http-methods.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, Message } from 'primeng/api';
import { Employee, Employee2 } from '../../Models/Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  providers: [HttpMethodsService, ConfirmationService, MessageService]
})
export class CreateEmployeeComponent implements OnInit {
  createEmployeeForm: FormGroup;
  employee: Employee;
  warningMsgs: Message[] = [];
  constructor(
    private fb: FormBuilder,
    private httpService: HttpMethodsService,
    private router: Router,
    private cnfrmService: ConfirmationService,
    private msgService: MessageService
  ) { }

  ngOnInit() {
    this.createEmployeeForm = this.fb.group({
      name: [''],
      salary: [''],
      age: ['']
    });
  }
  confirmToReset() {
    this.cnfrmService.confirm({
      message: 'Are you sure that you want to delete all ur details?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.createEmployeeForm.reset();
        this.warningMsgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
      },
      reject: () => {
        this.warningMsgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }
  CreateNewEmployee(): void {
    this.employee = this.createEmployeeForm.value;
    this.httpService.saveEmployee(this.createEmployeeForm.value).subscribe(data => {
     // {name: "Harih", salary: "12000", age: "21", id: "55498"}
     this.router.navigate(['/httpRequestmodule/getEmployees']);
    });
  }
}

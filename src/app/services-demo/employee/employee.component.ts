import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeesList: any[];
  employee: any;
  statusMessage: string;
  getSpecificEmp: any[];
  constructor(private empService: EmployeesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const empID = this.activatedRoute.snapshot.params.id;
    this.employeesList = this.empService.getEmployees();
    this.getSpecificEmp = this.employeesList.filter( employee =>  employee.ID === Number(empID));
    if (this.getSpecificEmp[0] == null) {
      console.log('if case');
      this.statusMessage = 'please provide valid employee id';
    } else {
      this.employee = this.getSpecificEmp[0];
    }
  }
}

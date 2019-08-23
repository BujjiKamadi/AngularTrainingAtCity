import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  providers: [EmployeesService]
})
export class EmployeesListComponent implements OnInit {
  employees: any[];
  constructor(private empService: EmployeesService) { }

  ngOnInit() {
    this.employees = this.empService.getEmployees();
    console.log(this.employees);
  }

}

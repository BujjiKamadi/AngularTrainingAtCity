import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services-demo/employees.service';

@Component({
  selector: 'app-filter-employees',
  templateUrl: './filter-employees.component.html',
  styleUrls: ['./filter-employees.component.scss'],
  providers: [EmployeesService]
})
export class FilterEmployeesComponent implements OnInit {
  searchTerm: string;
  employees: any[];
  constructor(private empService: EmployeesService) { }

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }
  changeEmployeeName(): void {
    this.employees[0].Name = 'Sai Lakshmi';
    // const newEmployeeArray: any[] = Object.assign([], this.employees);
    // newEmployeeArray[0].Name = 'Sai Laskhmi';
    // this.employees = newEmployeeArray;
  }
  onMouseMove(): void {
    
  }

}

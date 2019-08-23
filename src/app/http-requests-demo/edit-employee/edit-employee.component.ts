import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpMethodsService } from '../../services/http-methods.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee, Employee2 } from '../../Models/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
  providers: [HttpMethodsService]
})
export class EditEmployeeComponent implements OnInit {
  empID: number;
  editEmployeeForm: FormGroup;
  empDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpMethodsService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.editEmployeeForm = this.fb.group({
      name: [''],
      salary: [''],
      age: ['']
    });
    this.empID = this.activatedRoute.snapshot.params.id;
    console.log(this.empID);
    this.getEmployeeDetails();
  }
  getEmployeeDetails() {
    this.httpService.getEmployeeById(this.empID).subscribe(data => {
      // {id: "33", employee_name: "shaileshs", employee_salary: "0", employee_age: "0", profile_image: ""}
      this.empDetails = data;
      this.editEmployeeForm.patchValue({ name: data.employee_name, salary: data.employee_salary, age: data.employee_age });
    });
  }
  updateEmployeedetails() {
    this.httpService.updateEmployee(this.editEmployeeForm.value, this.empID).subscribe(data => {
      // {name: "Bruno Nashh", salary: "163500", age: "38"}
      this.router.navigate(['/httpRequestmodule/getEmployees']);
    });
  }

}

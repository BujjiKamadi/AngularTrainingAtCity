import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from '../../services/http-methods.service';
import { ConfirmationService, MessageService, Message } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [HttpMethodsService, , ConfirmationService, MessageService, ConfigService]
})
export class EmployeesComponent implements OnInit {
  employees: any[];
  warningMsgs: Message[] = [];
  display = false;
  constructor(
    private httpService: HttpMethodsService,
    private cnfrmService: ConfirmationService,
    private msgService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {
    // this.employees = this.activatedRoute.snapshot.data.getEmps;
  }

  ngOnInit() {
     this.subscribeEmployees();
      // this.configService.getConfig().subscribe(data => {
      //   this.employees = data as any[];
      // });
  }

  subscribeEmployees() {
    this.httpService.getEmployees().subscribe(data => {
      // {id: "9651", employee_name: "JohniaC", employee_salary: "82309", employee_age: "61", profile_image: ""}
      this.employees = data as any[];
    }, (error) => {
      console.error(error);
    });
  }
  deleteEmployee(empID) {
    this.httpService.deleteEmployee(empID).subscribe(data => {
      // success: {text: "successfully! deleted Records"}
      this.subscribeEmployees();
      this.display = false;
    });
  }
  showDialog() {
    this.display = true;
  }
  private handleError(error: HttpErrorResponse) {

  }

}

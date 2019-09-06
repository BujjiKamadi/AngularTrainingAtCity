import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule} from '../primeng/primeng.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeGuardService } from './employee/employee-guard.service';
import { ExportToExcelComponent } from './export-to-excel/export-to-excel.component';

@NgModule({
  declarations: [EmployeesListComponent, EmployeeComponent, ExportToExcelComponent],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    EmployeesListComponent
  ],
  providers: [EmployeeGuardService]
})
export class ServicesDemoModule { }

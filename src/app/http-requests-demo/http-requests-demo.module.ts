import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { PrimengModule } from '../primeng/primeng.module';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent} from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesListResolverService } from './employees/employees-list-resolve.servcie';

const httpRequestsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'getEmployees',
        component: EmployeesComponent,
        // resolve: { getEmps: EmployeesListResolverService}
      },
      { path: 'createEmp', component: CreateEmployeeComponent},
      { path: 'editEmp/:id', component: EditEmployeeComponent}
    ]
  }
];

@NgModule({
  declarations: [
    EmployeesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PrimengModule,
    RouterModule.forChild(httpRequestsRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeesListResolverService]
})
export class HttpRequestsDemoModule { }

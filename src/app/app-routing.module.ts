import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

import { ReactiveFormsComponent } from './forms-demo/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './forms-demo/template-forms/template-forms.component';
import { EmployeesListComponent } from './services-demo/employees-list/employees-list.component';
import { ExportToExcelComponent } from './services-demo/export-to-excel/export-to-excel.component';
import { RegistrationDetailsComponent } from './forms-demo/registration-details/registration-details.component';
import { FormArraysComponent } from './forms-demo/form-arrays/form-arrays.component';
import { FormArraysPrimeNgComponent } from './forms-demo/form-arrays-prime-ng/form-arrays-prime-ng.component';
import { ComponentCommunicationComponent } from './forms-demo/component-communication/component-communication.component';
import { FilterEmployeesComponent } from './pipes/filter-employees/filter-employees.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasicDemoComponent } from './router-demo/basic-demo/basic-demo.component';
import { ReactiveFormsCanDeactivateGuardService } from './forms-demo/reactive-forms/reactive-forms-can-deactivate-guard.service';
import { EmployeeComponent } from './services-demo/employee/employee.component';
import { EmployeeGuardService } from './services-demo/employee/employee-guard.service';
import { AppRouteGuardService } from './app-route-guard.service';
import { SampleComponent } from './rxjs/sample/sample.component';
import { ReferenceFormatComponent } from './forms-demo/reference-format/reference-format.component';
import { PaginatorComponent } from './primeng-demo/paginator/paginator.component';

// import { DirectivesDemoComponent} from './directives/directives-demo/directives-demo.component';

const routes: Routes = [
  {
    path: 'directivesModule',
    loadChildren: () => import('./directives/directives.module').then(mod => mod.DirectivesModule)
  },
  // { path: 'directivesModule', component: DirectivesDemoComponent },
  {
    path: 'pipesModule',
    loadChildren: () => import('./pipes/pipes.module').then(mod => mod.PipesModule)
  },
  {
    path: 'httpRequestmodule',
    loadChildren: () => import('./http-requests-demo/http-requests-demo.module').then(mod => mod.HttpRequestsDemoModule)
  },
  {
    path: 'reactiveForms', component: ReactiveFormsComponent,
    canDeactivate: [ReactiveFormsCanDeactivateGuardService], canActivate: [AppRouteGuardService]
  },
  { path: 'templateDrivenForms', component: TemplateFormsComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'employeeList', component: EmployeesListComponent },
  { path: 'exportToExcel', component: ExportToExcelComponent},
  { path: 'employee/:id', component: EmployeeComponent, canActivate: [EmployeeGuardService] },
  { path: 'registrationDetails', component: RegistrationDetailsComponent },
  { path: 'formArrays', component: FormArraysComponent },
  { path: 'formArrayPrimeNg', component: FormArraysPrimeNgComponent },
  { path: 'referenceFormat', component: ReferenceFormatComponent},
  { path: 'compCommunication', component: ComponentCommunicationComponent },
  { path: 'filterEmployees', component: FilterEmployeesComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'rxjs/Sample', component: SampleComponent},
  { path: 'basicRouting', component: BasicDemoComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'notFound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { preloadingStrategy: PreloadAllModules },
    // { preloadingStrategy: NoPreloading }
  )],
  exports: [RouterModule],
  providers: [AppRouteGuardService]
})
export class AppRoutingModule { }

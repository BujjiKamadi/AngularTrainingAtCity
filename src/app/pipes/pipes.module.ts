import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FilterEmployeesPipe } from './filter-employees.pipe';
import { FilterEmployeesComponent } from './filter-employees/filter-employees.component';

import {PipesRoutingModule } from './pipes-routing.module';

@NgModule({
  declarations: [
    BuiltInPipesComponent,
    ExponentialStrengthPipe,
    FilterEmployeesPipe,
    FilterEmployeesComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }

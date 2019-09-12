import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { PrimengModule } from '../primeng/primeng.module';
import { TableDemoComponent } from './table-demo/table-demo.component';

@NgModule({
  declarations: [PaginatorComponent, TableDemoComponent],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class PrimengDemoModule { }

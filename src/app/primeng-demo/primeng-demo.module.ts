import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class PrimengDemoModule { }

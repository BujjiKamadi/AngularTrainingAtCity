import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class RxjsModule { }

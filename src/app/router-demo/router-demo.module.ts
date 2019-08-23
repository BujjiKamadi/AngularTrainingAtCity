import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDemoComponent } from './basic-demo/basic-demo.component';
import { RouterModule } from '@angular/router';
import { Path1Component } from './path1/path1.component';

@NgModule({
  declarations: [BasicDemoComponent, Path1Component],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RouterDemoModule { }

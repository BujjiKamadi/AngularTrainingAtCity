import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path1Component } from './path1/path1.component';

const sampleRoutes = [
    {path: '/path1', compenent: Path1Component }
];
@NgModule({
    imports: [RouterModule.forRoot(sampleRoutes)],
    exports: [RouterModule]
})
export class RouterDemoRoutingModule { }
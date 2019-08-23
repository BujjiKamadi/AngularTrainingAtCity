import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterEmployeesComponent } from './filter-employees/filter-employees.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';

const pipesRoute: Routes = [
    {
        path: '', children: [
            { path: '', component: FilterEmployeesComponent },
            { path: 'builtInPipes', component: BuiltInPipesComponent},
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(pipesRoute)],
    exports: [RouterModule],
    providers: []
})
export class PipesRoutingModule { }
